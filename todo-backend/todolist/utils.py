import openai


def convert_audio_to_text(file_obj):
    # この関数は音声ファイルを受け取り、テキストに変換します
    audio_file = file_obj.read()
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    return transcript["text"]

def generate_todo_list(text):
    # この関数はテキストを受け取り、ToDoリストを生成します
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": text+"以上が内容になります。この内容を事実のみから踏まえtodolistを作成しなさい。ただし、listは[.]で分割し、それをタスクリストとして返しなさい。"},
        ]
    )
    contents = response["choices"][0]["message"]["content"]
    ####################
    #ここでテキストを要約する処理
    #今回はテキストを"."で分割し、それをタスクリストとして返すと仮定します
    ####################
    return contents.split(".")
