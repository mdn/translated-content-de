---
title: Einen WebSocket-Server in Java schreiben
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebSockets API")}}

Dieses Beispiel zeigt Ihnen, wie Sie einen WebSocket-API-Server mit Oracle Java erstellen.

Obwohl andere serverseitige Sprachen verwendet werden können, um einen WebSocket-Server zu erstellen, verwendet dieses Beispiel Oracle Java, um den Beispielcode zu vereinfachen.

Dieser Server entspricht [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455) und behandelt daher nur Verbindungen von Chrome ab Version 16, Firefox 11, IE 10 und höher.

## Erste Schritte

WebSockets kommunizieren über eine [TCP (Transmission Control Protocol)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)-Verbindung. Die `ServerSocket`-Klasse von Java befindet sich im `java.net`-Paket.

### ServerSocket

Der `ServerSocket`-Konstruktor akzeptiert einen einzelnen Parameter `port` vom Typ `int`.

Wenn Sie die ServerSocket-Klasse instanziieren, wird sie an die Portnummer gebunden, die Sie durch das _port_-Argument angegeben haben.

Hier ist eine Implementierung, aufgeteilt in Teile:

```java
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class WebSocket {
  public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
    ServerSocket server = new ServerSocket(80);
    try {
      System.out.println("Server has started on 127.0.0.1:80.\r\nWaiting for a connection…");
      Socket client = server.accept();
      System.out.println("A client connected.");
```

### Socket-Methoden

- `java.net.Socket.getInputStream()`
  - : Gibt einen Eingabestrom für diesen Socket zurück.
- `java.net.Socket.getOutputStream()`
  - : Gibt einen Ausgabestrom für diesen Socket zurück.

### OutputStream-Methoden

```java
write(byte[] b, int off, int len)
```

Schreibt `len` Bytes aus dem angegebenen Bytearray, beginnend bei Offset `off`, in diesen Ausgabestrom.

### InputStream-Methoden

```java
read(byte[] b, int off, int len)
```

Liest bis zu _len_ Bytes Daten aus dem Eingabestrom in ein Bytearray.

Lassen Sie uns unser Beispiel erweitern.

```java
InputStream in = client.getInputStream();
OutputStream out = client.getOutputStream();
Scanner s = new Scanner(in, "UTF-8");
```

## Handshaking

Wenn ein Client eine Verbindung zu einem Server herstellt, sendet er eine GET-Anfrage, um die Verbindung von einer einfachen HTTP-Anfrage auf einen WebSocket aufzurüsten. Dies wird als Handshaking bezeichnet.

```java
try {
  String data = s.useDelimiter("\\r\\n\\r\\n").next();
  Matcher get = Pattern.compile("^GET").matcher(data);
```

Das Erstellen der Antwort ist einfacher, als zu verstehen, warum Sie es auf diese Weise tun müssen.

Sie müssen:

1. Den Wert des _Sec-WebSocket-Key_-Request-Headers ohne führende und nachfolgende Leerzeichen erhalten
2. Ihn mit "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" verknüpfen
3. SHA-1 und Base64 davon berechnen
4. Ihn als Wert des _Sec-WebSocket-Accept_-Response-Headers als Teil einer HTTP-Antwort zurückschreiben.

```java
if (get.find()) {
  Matcher match = Pattern.compile("Sec-WebSocket-Key: (.*)").matcher(data);
  match.find();
  byte[] response = ("HTTP/1.1 101 Switching Protocols\r\n"
    + "Connection: Upgrade\r\n"
    + "Upgrade: websocket\r\n"
    + "Sec-WebSocket-Accept: "
    + Base64.getEncoder().encodeToString(MessageDigest.getInstance("SHA-1").digest((match.group(1) + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").getBytes("UTF-8")))
    + "\r\n\r\n").getBytes("UTF-8");
  out.write(response, 0, response.length);
```

## Nachrichten dekodieren

Nach einem erfolgreichen Handshake kann der Client Nachrichten an den Server senden, aber jetzt sind diese kodiert.

Wenn wir "abcdef" senden, erhalten wir diese Bytes:

```plain
129 134 167 225 225 210 198 131 130 182 194 135
```

- 129:

  | FIN (Ist dies die gesamte Nachricht?) | RSV1 | RSV2 | RSV3 | Opcode   |
  | ------------------------------------ | ---- | ---- | ---- | -------- |
  | 1                                    | 0    | 0    | 0    | 0x1=0001 |

  FIN: Sie können Ihre Nachricht in Frames senden, aber jetzt halten Sie es einfach.
  Opcode _0x1_ bedeutet, dass dies ein Text ist. [Vollständige Liste der Opcodes](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)

- 134:

  Wenn das zweite Byte minus 128 zwischen 0 und 125 liegt, ist dies die Länge der Nachricht. Wenn es 126 ist, sind die folgenden 2 Bytes (16-Bit-Unsigned-Integer), wenn 127, die folgenden 8 Bytes (64-Bit-Unsigned-Integer, das höchstwertige Bit MUSS 0 sein) die Länge.

  > [!NOTE]
  > Es kann 128 annehmen, da das erste Bit immer 1 ist.

- 167, 225, 225 und 210 sind die Bytes des Schlüssels zum Dekodieren. Sie ändern sich jedes Mal.

- Die verbleibenden kodierten Bytes sind die Nachricht.

### Dekodierungsalgorithmus

Dekodiertes Byte = Kodiertes Byte XOR (Position des kodierten Bytes BITWEISE UND 0x3)tes Byte des Schlüssels

Beispiel in Java:

```java
          byte[] decoded = new byte[6];
          byte[] encoded = new byte[] { (byte) 198, (byte) 131, (byte) 130, (byte) 182, (byte) 194, (byte) 135 };
          byte[] key = new byte[] { (byte) 167, (byte) 225, (byte) 225, (byte) 210 };
          for (int i = 0; i < encoded.length; i++) {
            decoded[i] = (byte) (encoded[i] ^ key[i & 0x3]);
          }
        }
      } finally {
        s.close();
      }
    } finally {
      server.close();
    }
  }
}
```

## Verwandt

- [WebSocket-Server schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
