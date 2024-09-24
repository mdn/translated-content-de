---
title: Schreiben eines WebSocket-Servers in C#
slug: Web/API/WebSockets_API/Writing_WebSocket_server
l10n:
  sourceCommit: 1fc3cc69ee229c7677883b45f5d1a71095f8a4c4
---

{{DefaultAPISidebar("WebSockets API")}}

Wenn Sie die WebSocket-API verwenden möchten, ist es nützlich, einen Server zu haben. In diesem Artikel zeige ich Ihnen, wie Sie einen in C# schreiben. Sie können es in jeder serverseitigen Sprache tun, aber um die Dinge einfach und verständlich zu halten, habe ich Microsofts Sprache gewählt.

Dieser Server entspricht [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455), daher wird er nur Verbindungen von Chrome Version 16, Firefox 11, IE 10 und höher behandeln.

## Erste Schritte

WebSockets kommunizieren über eine [TCP (Transmission Control Protocol)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)-Verbindung. Glücklicherweise hat C# eine [TcpListener](https://learn.microsoft.com/en-us/dotnet/api/system.net.sockets.tcplistener?view=net-6.0)-Klasse, die genau das tut, was der Name vermuten lässt. Sie befindet sich im Namespace `System.Net.Sockets`.

> [!NOTE]
> Es ist eine gute Idee, den Namespace mit dem `using`-Schlüsselwort einzubinden, um weniger schreiben zu müssen. Es ermöglicht die Nutzung von Klassen eines Namespaces, ohne jedes Mal den vollständigen Namespace eingeben zu müssen.

### TcpListener

Konstruktor:

```cs
TcpListener(System.Net.IPAddress localaddr, int port)
```

`localaddr` gibt die IP des Listeners an, und `port` gibt den Port an.

> [!NOTE]
> Um ein `IPAddress`-Objekt aus einem `string` zu erstellen, verwenden Sie die statische Methode `Parse` von `IPAddress`.

Methoden:

- `Start()`
- `System.Net.Sockets.TcpClient AcceptTcpClient()`
  Wartet auf eine TCP-Verbindung, akzeptiert sie und gibt sie als TcpClient-Objekt zurück.

Hier ist eine Minimalimplementierung eines Servers:

```cs
using System.Net.Sockets;
using System.Net;
using System;

class Server {
    public static void Main() {
        TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

        server.Start();
        Console.WriteLine("Server wurde auf 127.0.0.1:80 gestartet.{0}Warte auf eine Verbindung…", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("Ein Client hat sich verbunden.");
    }
}
```

### TcpClient

Methoden:

- `System.Net.Sockets.NetworkStream GetStream()`
  Holt den Stream, der der Kommunikationskanal ist. Beide Seiten des Kanals haben Lese- und Schreibfähigkeit.

Eigenschaften:

- `int Available`
  Diese Eigenschaft zeigt an, wie viele Bytes an Daten gesendet wurden. Der Wert ist null, bis `NetworkStream.DataAvailable` _true_ ist.

### NetworkStream

Methoden:

- Schreibt Bytes aus dem Buffer, `offset` und `size` bestimmen die Länge der Nachricht.

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

Console.WriteLine("Ein Client hat sich verbunden.");

NetworkStream stream = client.GetStream();

// in eine unendliche Schleife gehen, um jede Änderung im Stream behandeln zu können
while (true) {
    while (!stream.DataAvailable);

    byte[] bytes = new byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}
```

## Handshaking

Wenn ein Client eine Verbindung zu einem Server herstellt, sendet er eine GET-Anfrage, um die Verbindung von einer einfachen HTTP-Anfrage auf eine WebSocket-Verbindung zu aktualisieren. Dies wird als Handshaking bezeichnet.

Dieser Beispielcode kann ein GET vom Client erkennen. Beachten Sie, dass dies blockiert, bis die ersten 3 Bytes einer Nachricht verfügbar sind. Alternative Lösungen sollten für Produktionsumgebungen untersucht werden.

```cs
using System.Text;
using System.Text.RegularExpressions;

while(client.Available < 3)
{
   // auf genügend verfügbare Bytes warten
}

byte[] bytes = new byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

// Bytes der Anfrage in String übersetzen
String data = Encoding.UTF8.GetString(bytes);

if (Regex.IsMatch(data, "^GET")) {

} else {

}
```

Die Antwort ist einfach zu erstellen, kann aber etwas schwer zu verstehen sein. Die vollständige Erklärung des Server-Handshakes finden Sie in RFC 6455, Abschnitt 4.2.2. Für unsere Zwecke werden wir einfach eine einfache Antwort erstellen.

Sie müssen:

1. Den Wert des "Sec-WebSocket-Key"-Anforderungsheaders ohne führende oder nachfolgende Leerzeichen erhalten
2. Ihn mit "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (eine spezielle GUID, die von RFC 6455 angegeben wird) verketten
3. SHA-1 und Base64-Hash des neuen Wertes berechnen
4. Den Hash als Wert des {{httpheader("Sec-WebSocket-Accept")}} Antwort-Headers in einer HTTP-Antwort zurückschreiben

```cs
if (new System.Text.RegularExpressions.Regex("^GET").IsMatch(data))
{
    const string eol = "\r\n"; // HTTP/1.1 definiert die Sequenz CR LF als End-of-Line-Markierung

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

## Nachrichten dekodieren

Nach einem erfolgreichen Handshake sendet der Client codierte Nachrichten an den Server.

Wenn wir "MDN" senden, erhalten wir diese Bytes:

```plain
129 131 61 84 35 6 112 16 109
```

Schauen wir uns an, was diese Bytes bedeuten.

Das erste Byte, das derzeit den Wert 129 hat, ist ein Bitfeld, das sich wie folgt aufschlüsselt:

| FIN (Bit 0) | RSV1 (Bit 1) | RSV2 (Bit 2) | RSV3 (Bit 3) | Opcode (Bit 4:7) |
| ----------- | ------------ | ------------ | ------------ | ---------------- |
| 1           | 0            | 0            | 0            | 0x1=0001         |

- FIN-Bit: Dieses Bit gibt an, ob die vollständige Nachricht vom Client gesendet wurde. Nachrichten können in Frames gesendet werden, aber für jetzt halten wir die Dinge einfach.
- RSV1, RSV2, RSV3: Diese Bits müssen 0 sein, es sei denn, eine Erweiterung wird verhandelt, die ihnen einen ungleich null Wert zuweist.
- Opcode: Diese Bits beschreiben den Typ der empfangenen Nachricht. Opcode 0x1 bedeutet, dass dies eine Textnachricht ist. [Komplette Liste der Opcodes](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)

Das zweite Byte, das derzeit den Wert 131 hat, ist ein weiteres Bitfeld, das sich wie folgt aufschlüsselt:

| MASK (Bit 0) | Payload-Länge (Bit 1:7) |
| ------------ | ----------------------- |
| 1            | 0x83=0000011            |

- MASK-Bit: Gibt an, ob die "Payload-Daten" maskiert sind. Wenn es auf 1 gesetzt ist, ist ein Masking-Schlüssel in Masking-Key vorhanden, und dieser wird verwendet, um die "Payload-Daten" zu entmaskieren. Alle Nachrichten vom Client zum Server haben dieses Bit gesetzt.
- Payload-Länge: Wenn dieser Wert zwischen 0 und 125 liegt, dann ist es die Länge der Nachricht. Wenn es 126 ist, sind die folgenden 2 Bytes (16-bit unsigned integer) die Länge. Wenn es 127 ist, sind die folgenden 8 Bytes (64-bit unsigned integer) die Länge.

> [!NOTE]
> Da das erste Bit immer 1 für Nachrichten vom Client zum Server ist, können Sie 128 von diesem Byte abziehen, um das MASK-Bit zu entfernen.

Beachten Sie, dass das MASK-Bit in unserer Nachricht gesetzt ist. Das bedeutet, dass die nächsten vier Bytes (61, 84, 35 und 6) die Maskenbytes sind, die verwendet werden, um die Nachricht zu dekodieren. Diese Bytes ändern sich mit jeder Nachricht.

Die restlichen Bytes sind die kodierte Nachrichten-Nutzlast.

### Dekodierungsalgorithmus

_D_i_ = _E_i_ XOR _M_\_(_i_ mod 4)

wobei _D_ das dekodierte Nachrichtenfeld ist, _E_ das kodierte Nachrichtenfeld, _M_ das Maskenbyte-Feld und _i_ der Index des zu dekodierenden Nachrichtenbytes ist.

Beispiel in C#:

```cs
byte[] decoded = new byte[3];
byte[] encoded = new byte[3] {112, 16, 109};
byte[] mask = new byte[4] {61, 84, 35, 6};

for (int i = 0; i < encoded.Length; i++) {
    decoded[i] = (byte)(encoded[i] ^ mask[i % 4]);
}
```

## Zusammenfügen

### wsserver.cs

```cs
//
// csc wsserver.cs
// wsserver.exe

using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;

class Server {
    public static void Main() {
        string ip = "127.0.0.1";
        int port = 80;
        var server = new TcpListener(IPAddress.Parse(ip), port);

        server.Start();
        Console.WriteLine("Server wurde auf {0}:{1} gestartet, warte auf eine Verbindung…", ip, port);

        TcpClient client = server.AcceptTcpClient();
        Console.WriteLine("Ein Client hat sich verbunden.");

        NetworkStream stream = client.GetStream();

        // in eine unendliche Schleife gehen, um jede Änderung im Stream behandeln zu können
        while (true) {
            while (!stream.DataAvailable);
            while (client.Available < 3); // auf "GET" prüfen

            byte[] bytes = new byte[client.Available];
            stream.Read(bytes, 0, bytes.Length);
            string s = Encoding.UTF8.GetString(bytes);

            if (Regex.IsMatch(s, "^GET", RegexOptions.IgnoreCase)) {
                Console.WriteLine("=====Handshaking vom Client=====\n{0}", s);

                // 1. Den Wert des "Sec-WebSocket-Key"-Anforderungsheaders ohne führende oder nachfolgende Leerzeichen erhalten
                // 2. Ihn mit "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (eine spezielle GUID, die von RFC 6455 angegeben wird) verketten
                // 3. SHA-1 und Base64-Hash des neuen Wertes berechnen
                // 4. Den Hash als Wert des "Sec-WebSocket-Accept"-Antwort-Headers in einer HTTP-Antwort zurückschreiben
                string swk = Regex.Match(s, "Sec-WebSocket-Key: (.*)").Groups[1].Value.Trim();
                string swka = swk + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
                byte[] swkaSha1 = System.Security.Cryptography.SHA1.Create().ComputeHash(Encoding.UTF8.GetBytes(swka));
                string swkaSha1Base64 = Convert.ToBase64String(swkaSha1);

                // HTTP/1.1 definiert die Sequenz CR LF als End-of-Line-Markierung
                byte[] response = Encoding.UTF8.GetBytes(
                    "HTTP/1.1 101 Switching Protocols\r\n" +
                    "Connection: Upgrade\r\n" +
                    "Upgrade: websocket\r\n" +
                    "Sec-WebSocket-Accept: " + swkaSha1Base64 + "\r\n\r\n");

                stream.Write(response, 0, response.Length);
            } else {
                bool fin = (bytes[0] & 0b10000000) != 0,
                    mask = (bytes[1] & 0b10000000) != 0; // muss wahr sein, "Alle Nachrichten vom Client zum Server haben dieses Bit gesetzt"
                int opcode = bytes[0] & 0b00001111; // erwarten 1 - Textnachricht
                ulong offset = 2,
                      msglen = bytes[1] & (ulong)0b01111111;

                if (msglen == 126) {
                    // Die Bytes sind umgekehrt, da WebSocket sie im Big-Endian-Format ausgibt,
                    // während BitConverter sie im Little-Endian-Format auf Windows haben möchte
                    msglen = BitConverter.ToUInt16(new byte[] { bytes[3], bytes[2] }, 0);
                    offset = 4;
                } else if (msglen == 127) {
                    // Um den folgenden Code zu testen, müssen wir größere Nachrichten manuell puffern, da das
                    // automatische Puffern der Netzwerkkarte zu latenzfreundlich für diesen Code sein könnte (das heißt, wir haben möglicherweise
                    // nur einige der Bytes in diesem WebSocket-Frame durch client.Available verfügbar).
                    msglen = BitConverter.ToUInt64(new byte[] { bytes[9], bytes[8], bytes[7], bytes[6], bytes[5], bytes[4], bytes[3], bytes[2] },0);
                    offset = 10;
                }

                if (msglen == 0) {
                    Console.WriteLine("msglen == 0");
                } else if (mask) {
                    byte[] decoded = new byte[msglen];
                    byte[] masks = new byte[4] { bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3] };
                    offset += 4;

                    for (ulong i = 0; i < msglen; ++i)
                        decoded[i] = (byte)(bytes[offset + i] ^ masks[i % 4]);

                    string text = Encoding.UTF8.GetString(decoded);
                    Console.WriteLine("{0}", text);
                } else
                    Console.WriteLine("Maskenbit nicht gesetzt");

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
  <style>
    textarea {
      vertical-align: bottom;
    }
    #output {
      overflow: auto;
    }
    #output > p {
      overflow-wrap: break-word;
    }
    #output span {
      color: blue;
    }
    #output span.error {
      color: red;
    }
  </style>
  <body>
    <h2>WebSocket-Test</h2>
    <textarea cols="60" rows="6"></textarea>
    <button>senden</button>
    <div id="output"></div>
  </body>
  <script>
    // http://www.websocket.org/echo.html
    const button = document.querySelector("button");
    const output = document.querySelector("#output");
    const textarea = document.querySelector("textarea");
    const wsUri = "ws://127.0.0.1/";
    const websocket = new WebSocket(wsUri);

    button.addEventListener("click", onClickButton);

    websocket.onopen = (e) => {
      writeToScreen("VERBUNDEN");
      doSend("WebSocket rocks");
    };

    websocket.onclose = (e) => {
      writeToScreen("GETRENNT");
    };

    websocket.onmessage = (e) => {
      writeToScreen(`<span>ANTWORT: ${e.data}</span>`);
    };

    websocket.onerror = (e) => {
      writeToScreen(`<span class="error">FEHLER:</span> ${e.data}`);
    };

    function doSend(message) {
      writeToScreen(`GESENDET: ${message}`);
      websocket.send(message);
    }

    function writeToScreen(message) {
      output.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);
    }

    function onClickButton() {
      const text = textarea.value;

      text && doSend(text);
      textarea.value = "";
      textarea.focus();
    }
  </script>
</html>
```

## Verwandt

- [Writing WebSocket servers](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
