---
title: "CloseEvent: code-Eigenschaft"
short-title: code
slug: Web/API/CloseEvent/code
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`code`**-Eigenschaft des [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interfaces gibt einen [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) zurück, der den Grund angibt, warum die Verbindung geschlossen wurde.

## Wert

Ein ganzzahliger [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) im Bereich `1000` - `4999`, der den Grund angibt, warum die Verbindung geschlossen wurde.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Statuscode</th>
      <th>Bedeutung</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code>–<code>999</code></td>
      <td></td>
      <td>Nicht verwendet.</td>
    </tr>
    <tr>
      <td><code>1000</code></td>
      <td>Normaler Abschluss</td>
      <td>
        Die Verbindung hat erfolgreich den Zweck erfüllt, für den sie erstellt wurde.
      </td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>Gehend</td>
      <td>
        Der Endpunkt wird geschlossen, entweder aufgrund eines Serverfehlers oder weil der Browser von der Seite weg navigiert, die die Verbindung geöffnet hat.
      </td>
    </tr>
    <tr>
      <td><code>1002</code></td>
      <td>Protokollfehler</td>
      <td>
        Der Endpunkt beendet die Verbindung aufgrund eines Protokollfehlers.
      </td>
    </tr>
    <tr>
      <td><code>1003</code></td>
      <td>Nicht unterstützte Daten</td>
      <td>
        Die Verbindung wird beendet, weil der Endpunkt Daten eines Typs empfängt, den er nicht akzeptieren kann. (Zum Beispiel erhält ein nur-text-Endpunkt Binärdaten.)
      </td>
    </tr>
    <tr>
      <td><code>1004</code></td>
      <td>Reserviert</td>
      <td>
        <strong>Reserviert.</strong> Eine Bedeutung könnte in der Zukunft definiert werden.
      </td>
    </tr>
    <tr>
      <td><code>1005</code></td>
      <td>Kein Status erhalten</td>
      <td>
        <strong>Reserviert.</strong> Zeigt an, dass kein Statuscode angegeben wurde, obwohl einer erwartet wurde.
      </td>
    </tr>
    <tr>
      <td><code>1006</code></td>
      <td>Abnormaler Abschluss</td>
      <td>
       <strong>Reserviert.</strong> Zeigt an, dass eine Verbindung abnormal geschlossen wurde (d.h. ohne dass ein Abschluss-Frame gesendet wurde), wenn ein Statuscode erwartet wird.
      </td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>Ungültige Frame-Payload-Daten</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil eine Nachricht empfangen wurde, die inkonsistente Daten enthält (z. B. nicht-UTF-8-Daten innerhalb einer Textnachricht).
      </td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>Richtlinienverstoß</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil er eine Nachricht erhalten hat, die seine Richtlinie verletzt. Dies ist ein generischer Statuscode, der verwendet wird, wenn Codes 1003 und 1009 nicht geeignet sind.
      </td>
    </tr>
    <tr>
      <td><code>1009</code></td>
      <td>Nachricht zu groß</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil ein Datenframe empfangen wurde, der zu groß ist.
      </td>
    </tr>
    <tr>
      <td><code>1010</code></td>
      <td>Erforderliche Erweiterung</td>
      <td>
        Der Client beendet die Verbindung, weil er erwartet hat, dass der Server eine oder mehrere Erweiterungen verhandelt, dies jedoch nicht getan hat.
      </td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>Interner Fehler</td>
      <td>
        Der Server beendet die Verbindung, weil er auf eine unerwartete Bedingung gestoßen ist, die ihn daran hindert, die Anfrage zu erfüllen.
      </td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Dienstneustart</a></td>
      <td>
        Der Server beendet die Verbindung, weil er einen Neustart durchführt.
      </td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Später erneut versuchen</a></td>
      <td>
        Der Server beendet die Verbindung aufgrund einer vorübergehenden Bedingung, z. B. weil er überlastet ist und einige seiner Clients abwirft.
      </td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/VOLI2xp4tzFnIFYespe6oOtpFXA/">Schlechtes Gateway</a></td>
      <td>
        Der Server agierte als Gateway oder Proxy und erhielt eine ungültige Antwort vom Upstream-Server. Dies ist ähnlich dem HTTP-Statuscode 502.
      </td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS-Handschlag</td>
      <td>
        <strong>Reserviert.</strong> Zeigt an, dass die Verbindung aufgrund eines Fehlers beim Herstellen eines TLS-Handschlags (z. B. kann das Serverzertifikat nicht verifiziert werden) geschlossen wurde.
      </td>
    </tr>
    <tr>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>
        Für die Definition durch zukünftige Revisionen der WebSocket-Protokollspezifikation und für die Definition durch Erweiterungsspezifikationen.
      </td>
    </tr>
    <tr>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>
        Für die Verwendung durch Bibliotheken, Frameworks und Anwendungen. Diese Statuscodes sind <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">direkt bei IANA registriert</a>. Die Interpretation dieser Codes ist im WebSocket-Protokoll nicht definiert.
      </td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
         Für private Nutzung, daher können sie nicht registriert werden. Solche Codes können durch vorherige Vereinbarungen zwischen WebSocket-Anwendungen verwendet werden. Die Interpretation dieser Codes ist im WebSocket-Protokoll nicht definiert.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel gibt den Wert von `code` in der Konsole aus.

```js
WebSocket.onclose = (event) => {
  console.log(event.code);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
- [WebSocket Close Code Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#close-code-number) (IANA)
