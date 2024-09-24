---
title: "CloseEvent: code-Eigenschaft"
short-title: code
slug: Web/API/CloseEvent/code
l10n:
  sourceCommit: f56df7cd1613660f455108682e3d1e95fc4749e8
---

{{APIRef("Websockets API")}}

Die schreibgeschützte **`code`**-Eigenschaft der {{domxref("CloseEvent")}}-Schnittstelle gibt einen [WebSocket-Verbindungsabschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) zurück, der den Grund für das Beenden der Verbindung angibt.

## Wert

Ein ganzzahliger [WebSocket-Verbindungsabschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) im Bereich `1000` - `4999`, der den Grund für das Beenden der Verbindung angibt.

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
        Die Verbindung hat den Zweck, für den sie erstellt wurde,
        erfolgreich abgeschlossen.
      </td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>Geht weg</td>
      <td>
        Der Endpunkt wird geschlossen, entweder aufgrund eines Serverfehlers oder
        weil der Browser die Seite verlässt, die die Verbindung geöffnet hat.
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
        Die Verbindung wird beendet, weil der Endpunkt Daten eines
        Typs erhalten hat, den er nicht akzeptieren kann. (Zum Beispiel hat ein text-only Endpunkt
        Binärdaten erhalten.)
      </td>
    </tr>
    <tr>
      <td><code>1004</code></td>
      <td>Reserviert</td>
      <td>
        <strong>Reserviert.</strong> Eine Bedeutung könnte in Zukunft definiert werden.
      </td>
    </tr>
    <tr>
      <td><code>1005</code></td>
      <td>Kein Status empfangen</td>
      <td>
        <strong>Reserviert.</strong> Zeigt an, dass kein Statuscode bereitgestellt wurde, obwohl einer erwartet wurde.
      </td>
    </tr>
    <tr>
      <td><code>1006</code></td>
      <td>Abnormaler Abschluss</td>
      <td>
       <strong>Reserviert.</strong> Zeigt an, dass eine Verbindung abnormal geschlossen wurde (d. h. ohne
        ein Abschlussframe zu senden), wenn ein Statuscode erwartet wird.
      </td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>Ungültige Frame-Nutzdaten</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil eine Nachricht empfangen wurde,
        die inkonsistente Daten enthält (z. B. nicht-UTF-8-Daten innerhalb einer
        Textnachricht).
      </td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>Verletzung der Richtlinien</td>
      <td>
        Der Endpunkt beendet die Verbindung, da er eine Nachricht erhalten hat,
        die gegen seine Richtlinien verstößt. Dies ist ein generischer Statuscode, der verwendet wird, wenn die Codes
        1003 und 1009 nicht geeignet sind.
      </td>
    </tr>
    <tr>
      <td><code>1009</code></td>
      <td>Nachricht zu groß</td>
      <td>
        Der Endpunkt beendet die Verbindung, da ein Datenrahmen empfangen wurde,
        der zu groß ist.
      </td>
    </tr>
    <tr>
      <td><code>1010</code></td>
      <td>Zwingende Erweiterung</td>
      <td>
        Der Client beendet die Verbindung, weil er erwartet hat, dass der Server
        eine oder mehrere Erweiterungen verhandelt, dies jedoch nicht getan hat.
      </td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>Interner Fehler</td>
      <td>
        Der Server beendet die Verbindung, da er eine
        unerwartete Bedingung erlebt hat, die ihn daran gehindert hat, die Anforderung zu erfüllen.
      </td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Dienstneustart</a></td>
      <td>
        Der Server beendet die Verbindung, weil er neu startet.
      </td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Später nochmal versuchen</a></td>
      <td>
        Der Server beendet die Verbindung aufgrund einer temporären Bedingung,
        z. B. Überlastung, und er entlässt einige seiner Clients.
      </td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/VOLI2xp4tzFnIFYespe6oOtpFXA/">Schlechtes Gateway</a></td>
      <td>
        Der Server agierte als Gateway oder Proxy und erhielt eine ungültige
        Antwort vom Upstream-Server. Dies ähnelt dem 502 HTTP-Statuscode.
      </td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS-Handshake</td>
      <td>
        <strong>Reserviert.</strong> Zeigt an, dass die Verbindung aufgrund eines
        Fehlers beim Ausführen eines TLS-Handshakes geschlossen wurde (z. B. kann das Serverzertifikat
        nicht verifiziert werden).
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
        Für die Verwendung durch Bibliotheken, Frameworks und Anwendungen. Diese Statuscodes werden <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">direkt bei der IANA registriert</a>. Die Interpretation dieser Codes ist im WebSocket-Protokoll nicht definiert.
      </td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
         Für den privaten Gebrauch und somit nicht registrierbar. Solche Codes können durch vorherige Vereinbarungen zwischen WebSocket-Anwendungen verwendet werden. Die Interpretation dieser Codes ist im WebSocket-Protokoll nicht definiert.
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
