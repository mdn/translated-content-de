---
title: Schreiben eines WebSocket-Servers in C#
slug: Web/API/WebSockets_API/Writing_WebSocket_server
l10n:
  sourceCommit: 3a04b53622d472799bacec2b79ef7bd44b43f1d9
---

{{DefaultAPISidebar("WebSockets API")}}

Wenn Sie die WebSocket API verwenden möchten, ist es nützlich, wenn Sie einen Server haben. In diesem Artikel zeige ich Ihnen, wie Sie einen in C# schreiben. Sie können es in jeder serverseitigen Sprache tun, aber um die Dinge einfach und verständlicher zu halten, habe ich die Sprache von Microsoft gewählt.

Dieses Lernbeispiel demonstriert den Handshake und die grundlegende Nachrichtenrahmung, wie sie in [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455) definiert sind.

> [!WARNING]
> Dies ist keine vollständige WebSocket-Implementierung: Zum Beispiel puffert die Empfangsschleife keine Teilrahmen oder behandelt Kontrollrahmen und fragmentierte Nachrichten. Verwenden Sie eine WebSocket-Bibliothek für einen Produktionsserver.

## Erste Schritte

WebSockets kommunizieren über eine [TCP (Transmission Control Protocol)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)-Verbindung. Glücklicherweise hat C# eine [TcpListener](https://learn.microsoft.com/en-us/dotnet/api/system.net.sockets.tcplistener?view=net-6.0) Klasse, die das tut, was der Name vermuten lässt. Sie befindet sich im `System.Net.Sockets`-Namespace.

> [!NOTE]
> Es ist eine gute Idee, den Namespace mit dem `using`-Schlüsselwort einzuschließen, um weniger schreiben zu müssen. Es ermöglicht die Nutzung der Klassen eines Namespace, ohne jedes Mal den vollständigen Namespace schreiben zu müssen.

### TcpListener

Konstruktor:

```cs
TcpListener(System.Net.IPAddress localAddr, int port)
```

`localAddr` spezifiziert die IP des Listeners, und `port` spezifiziert den Port.

> [!NOTE]
> Um ein `IPAddress`-Objekt aus einem `string` zu erstellen, verwenden Sie die `Parse`-statische Methode von `IPAddress`.

Methoden:

- `Start()`
- `System.Net.Sockets.TcpClient AcceptTcpClient()`
  Wartet auf eine TCP-Verbindung, akzeptiert sie und gibt sie als TcpClient-Objekt zurück.

Hier ist eine einfache Server-Implementierung:

```cs
using System.Net.Sockets;
using System.Net;
using System;

class Server {
    public static void Main() {
        TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

        server.Start();
        Console.WriteLine("Server has started on 127.0.0.1:80.{0}Waiting for a connection…", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("A client connected.");
    }
}
```

### TcpClient

Methoden:

- `System.Net.Sockets.NetworkStream GetStream()`
  Holt den Stream, der der Kommunikationskanal ist. Beide Seiten des Kanals haben Lese- und Schreibfähigkeit.

Eigenschaften:

- `int Available`
  Diese Eigenschaft zeigt an, wie viele Bytes an Daten gesendet wurden. Der Wert ist null, bis `NetworkStream.DataAvailable` auf _true_ steht.

### NetworkStream

Methoden:

- Schreibt Bytes vom Puffer, Offset und Größe bestimmen die Länge der Nachricht.

  ```cs
  Write(byte[] buffer, int offset, int size)
  ```

- Liest Bytes in `buffer`. `offset` und `size` bestimmen die Länge der Nachricht.

  ```cs
  Read(byte[] buffer, int offset, int size)
  ```

Lassen Sie uns unser Beispiel erweitern.

```cs
TcpClient client = server.AcceptTcpClient();

Console.WriteLine("A client connected.");

NetworkStream stream = client.GetStream();

// Enter to an infinite cycle to be able to handle every change in stream
while (true) {
    while (!stream.DataAvailable);

    byte[] bytes = new byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}
```

## Handshaking

Wenn ein Client zu einem Server verbindet, sendet er eine GET-Anfrage, um die Verbindung von einer einfachen HTTP-Anfrage auf einen WebSocket zu aktualisieren. Dies wird als Handshake bezeichnet.

Dieser Beispielcode kann ein GET vom Client erkennen. Beachten Sie, dass dies blockieren wird, bis die ersten 3 Bytes einer Nachricht verfügbar sind. Alternative Lösungen sollten für Produktionsumgebungen in Betracht gezogen werden.

```cs
using System.Text;
using System.Text.RegularExpressions;

while(client.Available < 3)
{
   // wait for enough bytes to be available
}

byte[] bytes = new byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

// Translate bytes of request to string
String data = Encoding.UTF8.GetString(bytes);

if (Regex.IsMatch(data, "^GET")) {

} else {

}
```

Die Antwort ist einfach zu erstellen, kann aber etwas schwer zu verstehen sein. Die vollständige Erklärung des Server-Handshakes finden Sie in RFC 6455, Abschnitt 4.2.2. Für unsere Zwecke erstellen wir einfach eine einfache Antwort.

Sie müssen:

1. Den Wert des "Sec-WebSocket-Key"-Anforderungs-Headers ohne führende oder nachfolgende Leerzeichen erhalten
2. Es mit "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (eine spezielle GUID, die von RFC 6455 spezifiziert wird) verkettet
3. SHA-1- und Base64-Hash des neuen Wertes berechnen
4. Den Hash als Wert des {{httpheader("Sec-WebSocket-Accept")}} Antwort-Headers in einer HTTP-Antwort zurückschreiben

```cs
if (new System.Text.RegularExpressions.Regex("^GET").IsMatch(data))
{
    const string eol = "\r\n"; // HTTP/1.1 defines the sequence CR LF as the end-of-line marker

    byte[] response = Encoding.UTF8.GetBytes("HTTP/1.1 101 Switching Protocols" + eol
        + "Connection: Upgrade" + eol
        + "Upgrade: websocket" + eol
        + "Sec-WebSocket-Accept: " + Convert.ToBase64String(
            System.Security.Cryptography.SHA1.Create().ComputeHash(
                Encoding.UTF8.GetBytes(
                    new System.Text.RegularExpressions.Regex("Sec-WebSocket-Key: (.*)").Match(data).Groups[1].Value.Trim() + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
                )
            )
        ) + eol
        + eol);

    stream.Write(response, 0, response.Length);
}
```

## Nachrichten decodieren

Nach einem erfolgreichen Handshake wird der Client kodierte Nachrichten an den Server senden.

Wenn wir "MDN" senden, erhalten wir diese Bytes:

```plain
129 131 61 84 35 6 112 16 109
```

Schauen wir uns an, was diese Bytes bedeuten.

Das erste Byte, das derzeit einen Wert von 129 hat, ist ein Bitfeld, das sich wie folgt aufteilt:

| FIN (Bit 0) | RSV1 (Bit 1) | RSV2 (Bit 2) | RSV3 (Bit 3) | Opcode (Bit 4:7) |
| ----------- | ------------ | ------------ | ------------ | ---------------- |
| 1           | 0            | 0            | 0            | 0x1=0001         |

- FIN-Bit: Dieses Bit gibt an, ob die vollständige Nachricht vom Client gesendet wurde. Nachrichten können in Rahmen gesendet werden, aber für den Moment werden wir die Dinge einfach halten.
- RSV1, RSV2, RSV3: Diese Bits müssen 0 sein, es sei denn, eine Erweiterung wird ausgehandelt, die ihnen einen ungleichen Wert zuweist.
- Opcode: Diese Bits beschreiben den Typ der empfangenen Nachricht. Opcode 0x1 bedeutet, dass es sich um eine Textnachricht handelt. [Vollständige Liste der Opcodes](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)

Das zweite Byte, das derzeit einen Wert von 131 hat, ist ein weiteres Bitfeld, das sich wie folgt aufteilt:

| MASK (Bit 0) | Payload Length (Bit 1:7) |
| ------------ | ------------------------ |
| 1            | 0x83=0000011             |

- MASK-Bit: Definiert, ob die "Payload-Daten" maskiert sind. Wenn auf 1 gesetzt, ist ein Maskierungs-Schlüssel in Masking-Key vorhanden, und dieser wird verwendet, um die "Payload-Daten" zu demaskieren. Alle Nachrichten vom Client zum Server haben dieses Bit gesetzt.
- Payload-Länge: Wenn dieser Wert zwischen 0 und 125 liegt, dann ist es die Länge der Nachricht. Wenn es 126 ist, sind die folgenden 2 Bytes (16-Bit-Integer ohne Vorzeichen) die Länge. Wenn es 127 ist, sind die folgenden 8 Bytes (64-Bit-Integer ohne Vorzeichen) die Länge.

> [!NOTE]
> Da das erste Bit immer auf 1 für Nachrichten von Client zu Server gesetzt ist, können Sie 128 von diesem Byte subtrahieren, um das MASK-Bit loszuwerden.

Beachten Sie, dass das MASK-Bit in unserer Nachricht gesetzt ist. Dies bedeutet, dass die nächsten vier Bytes (61, 84, 35 und 6) die Maskierungs-Bytes sind, die verwendet werden, um die Nachricht zu decodieren. Diese Bytes ändern sich mit jeder Nachricht.

Die verbleibenden Bytes sind die kodierten Nachrichten-Payload.

### Decodier-Algorithmus

_D_i_ = _E_i_ XOR _M_\_(_i_ mod 4)

wobei _D_ das decodierte Nachrichten-Array ist, _E_ das kodierte Nachrichten-Array, _M_ das Maskierungs-Byte-Array und _i_ der Index des zu decodierenden Nachrichten-Bytes.

Beispiel in C#:

```cs
byte[] decoded = new byte[3];
byte[] encoded = new byte[3] {112, 16, 109};
byte[] mask = new byte[4] {61, 84, 35, 6};

for (int i = 0; i < encoded.Length; i++) {
    decoded[i] = (byte)(encoded[i] ^ mask[i % 4]);
}
```

## Senden von Nachrichten vom Server

Nach dem Handshake kann jede Seite Nachrichten senden, ohne auf eine Nachricht von der anderen Seite zu warten. Beispielsweise kann der Server eine Benachrichtigung senden, wenn sich eine Datei ändert oder ein Administrator eine Nachricht in seinem Terminal eingibt.

Das Senden von einfachen UTF-8-Bytes reicht nicht aus: Die Nachricht benötigt einen WebSocket-Rahmen. Die folgende Methode sendet eine Textnachricht in einem Rahmen. Sie setzt das FIN-Bit und den Text-Opcode, schreibt die UTF-8-Byte-Länge (die sich von der Zeichenfolgenlänge unterscheiden kann) und hängt dann die Nutzlast an. Erweiterte Längen verwenden die Netzwerk-Byte-Reihenfolge, wobei das bedeutendste Byte zuerst kommt. Im Gegensatz zu Client-Rahmen dürfen Server-Rahmen nicht maskiert werden.

Fügen Sie diese Methode zur `Server`-Klasse hinzu:

```cs
static void SendText(NetworkStream stream, string message) {
    byte[] payload = Encoding.UTF8.GetBytes(message);
    int headerLength = payload.Length <= 125 ? 2 : payload.Length <= 65535 ? 4 : 10;
    byte[] frame = new byte[headerLength + payload.Length];
    frame[0] = 0x81; // FIN = 1, opcode = 1 (text)

    // Server-to-client frames are not masked.
    if (headerLength == 2) {
        frame[1] = (byte)payload.Length;
    } else if (headerLength == 4) {
        frame[1] = 126;
        frame[2] = (byte)(payload.Length >> 8);
        frame[3] = (byte)(payload.Length & 0xff);
    } else {
        frame[1] = 127;
        ulong length = (ulong)payload.Length;
        for (int i = 0; i < 8; i++) {
            frame[2 + i] = (byte)((length >> (8 * (7 - i))) & 0xff);
        }
    }

    Array.Copy(payload, 0, frame, headerLength, payload.Length);
    // Keep frames intact if multiple server tasks use this helper.
    lock (stream) {
        stream.Write(frame, 0, frame.Length);
    }
}
```

Im nachfolgenden vollständigen Beispiel liest eine Hintergrundaufgabe Zeilen aus dem Serverterminal und ruft `SendText()` auf. Starten Sie diese Aufgabe, nachdem Sie die Handshake-Antwort geschrieben haben. Dies lässt die Empfangsschleife unabhängig von der Terminaleingabe fortfahren. Der Helfer serialisiert Schreiboperationen; die Empfangsschleife kann zur gleichen Zeit aus dem `NetworkStream` lesen.

Um es auszuprobieren, starten Sie den Server, öffnen Sie `client.html`, dann geben Sie eine Nachricht in das Serverterminal ein und drücken Sie Enter. Der Browser zeigt die Nachricht an, auch wenn Sie nicht auf dessen Senden-Button geklickt haben. Sie können auch Nachrichten vom Browser an den Server senden, indem Sie den Textbereich verwenden.

## Zusammengesetzt

### ws-server.cs

```cs
//
// csc ws-server.cs
// ws-server.exe

using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

class Server {
    static void SendText(NetworkStream stream, string message) {
        byte[] payload = Encoding.UTF8.GetBytes(message);
        int headerLength = payload.Length <= 125 ? 2 : payload.Length <= 65535 ? 4 : 10;
        byte[] frame = new byte[headerLength + payload.Length];
        frame[0] = 0x81; // FIN = 1, opcode = 1 (text)

        // Server-to-client frames are not masked.
        if (headerLength == 2) {
            frame[1] = (byte)payload.Length;
        } else if (headerLength == 4) {
            frame[1] = 126;
            frame[2] = (byte)(payload.Length >> 8);
            frame[3] = (byte)(payload.Length & 0xff);
        } else {
            frame[1] = 127;
            ulong length = (ulong)payload.Length;
            for (int i = 0; i < 8; i++) {
                frame[2 + i] = (byte)((length >> (8 * (7 - i))) & 0xff);
            }
        }

        Array.Copy(payload, 0, frame, headerLength, payload.Length);
        // Keep frames intact if multiple server tasks use this helper.
        lock (stream) {
            stream.Write(frame, 0, frame.Length);
        }
    }

    public static void Main() {
        string ip = "127.0.0.1";
        int port = 80;
        var server = new TcpListener(IPAddress.Parse(ip), port);

        server.Start();
        Console.WriteLine("Server has started on {0}:{1}, Waiting for a connection…", ip, port);

        TcpClient client = server.AcceptTcpClient();
        Console.WriteLine("A client connected.");

        NetworkStream stream = client.GetStream();

        // enter to an infinite cycle to be able to handle every change in stream
        while (true) {
            while (!stream.DataAvailable);
            while (client.Available < 3); // match against "get"

            byte[] bytes = new byte[client.Available];
            stream.Read(bytes, 0, bytes.Length);
            string s = Encoding.UTF8.GetString(bytes);

            if (Regex.IsMatch(s, "^GET", RegexOptions.IgnoreCase)) {
                Console.WriteLine("=====Handshaking from client=====\n{0}", s);

                // 1. Obtain the value of the "Sec-WebSocket-Key" request header without any leading or trailing whitespace
                // 2. Concatenate it with "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (a special GUID specified by RFC 6455)
                // 3. Compute SHA-1 and Base64 hash of the new value
                // 4. Write the hash back as the value of "Sec-WebSocket-Accept" response header in an HTTP response
                string swk = Regex.Match(s, "Sec-WebSocket-Key: (.*)").Groups[1].Value.Trim();
                string swkAndSalt = swk + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
                byte[] swkAndSaltSha1 = System.Security.Cryptography.SHA1.Create().ComputeHash(Encoding.UTF8.GetBytes(swkAndSalt));
                string swkAndSaltSha1Base64 = Convert.ToBase64String(swkAndSaltSha1);

                // HTTP/1.1 defines the sequence CR LF as the end-of-line marker
                byte[] response = Encoding.UTF8.GetBytes(
                    "HTTP/1.1 101 Switching Protocols\r\n" +
                    "Connection: Upgrade\r\n" +
                    "Upgrade: websocket\r\n" +
                    "Sec-WebSocket-Accept: " + swkAndSaltSha1Base64 + "\r\n\r\n");

                stream.Write(response, 0, response.Length);

                // Terminal input can send messages without any client request.
                Task.Run(() => {
                    Console.WriteLine("Type a message and press Enter to send it to the browser.");
                    try {
                        string message;
                        while ((message = Console.ReadLine()) != null) {
                            SendText(stream, message);
                        }
                    } catch (IOException ex) {
                        Console.WriteLine("Could not send the message: {0}", ex.Message);
                    } catch (ObjectDisposedException) {
                        Console.WriteLine("The connection is closed.");
                    }
                });
            } else {
                bool fin = (bytes[0] & 0b10000000) != 0,
                    mask = (bytes[1] & 0b10000000) != 0; // must be true, "All messages from the client to the server have this bit set"
                int opcode = bytes[0] & 0b00001111; // expecting 1 - text message
                ulong offset = 2,
                      msgLen = bytes[1] & (ulong)0b01111111;

                if (msgLen == 126) {
                    // bytes are reversed because websocket will print them in Big-Endian, whereas
                    // BitConverter will want them arranged in little-endian on windows
                    msgLen = BitConverter.ToUInt16(new byte[] { bytes[3], bytes[2] }, 0);
                    offset = 4;
                } else if (msgLen == 127) {
                    // To test the below code, we need to manually buffer larger messages — since the NIC's autobuffering
                    // may be too latency-friendly for this code to run (that is, we may have only some of the bytes in this
                    // websocket frame available through client.Available).
                    msgLen = BitConverter.ToUInt64(new byte[] { bytes[9], bytes[8], bytes[7], bytes[6], bytes[5], bytes[4], bytes[3], bytes[2] },0);
                    offset = 10;
                }

                if (msgLen == 0) {
                    Console.WriteLine("msgLen == 0");
                } else if (mask) {
                    byte[] decoded = new byte[msgLen];
                    byte[] masks = new byte[4] { bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3] };
                    offset += 4;

                    for (ulong i = 0; i < msgLen; ++i)
                        decoded[i] = (byte)(bytes[offset + i] ^ masks[i % 4]);

                    string text = Encoding.UTF8.GetString(decoded);
                    Console.WriteLine("{0}", text);
                } else
                    Console.WriteLine("mask bit not set");

                Console.WriteLine();
            }
        }
    }
}
```

### client.html

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="styles.css" />
    <script src="client.js" defer></script>
  </head>
  <body>
    <h2>WebSocket Test</h2>
    <textarea cols="60" rows="6"></textarea>
    <button>send</button>
    <div id="output"></div>
  </body>
</html>
```

### styles.css

```css
textarea {
  vertical-align: bottom;
}
#output {
  overflow: auto;
}
#output > p {
  overflow-wrap: break-word;
}
#output .received {
  color: blue;
}
#output .error {
  color: red;
}
```

### client.js

```js
const button = document.querySelector("button");
const output = document.querySelector("#output");
const textarea = document.querySelector("textarea");
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);

button.addEventListener("click", onClickButton);

websocket.onopen = (e) => {
  writeToScreen("CONNECTED");
};

websocket.onclose = (e) => {
  writeToScreen("DISCONNECTED");
};

websocket.onmessage = (e) => {
  writeToScreen(`RECEIVED: ${e.data}`, "received");
};

websocket.onerror = () => {
  writeToScreen(
    "A WebSocket error occurred. Check the browser console.",
    "error",
  );
};

function doSend(message) {
  writeToScreen(`SENT: ${message}`);
  websocket.send(message);
}

function writeToScreen(message, className = "") {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  paragraph.className = className;
  output.prepend(paragraph);
}

function onClickButton() {
  const text = textarea.value;

  text && doSend(text);
  textarea.value = "";
  textarea.focus();
}
```

## Verwandtes

- [Schreiben von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
