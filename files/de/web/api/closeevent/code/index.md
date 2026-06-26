---
title: "CloseEvent: code Eigenschaft"
short-title: code
slug: Web/API/CloseEvent/code
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die **`code`** schreibgeschützte Eigenschaft des [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interfaces gibt einen [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/info/rfc6455/#section-7.1.5) zurück, der den Grund angibt, warum die Verbindung geschlossen wurde.

## Wert

Ein ganzzahliger [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/info/rfc6455/#section-7.1.5) im Bereich `1000` - `4999`, der den Grund angibt, warum die Verbindung geschlossen wurde.

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
        Die Verbindung hat den Zweck, für den sie erstellt wurde, erfolgreich abgeschlossen.
      </td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>Verschwindet</td>
      <td>
        Der Endpunkt verschwindet, entweder aufgrund eines Serverfehlers oder weil der Browser die Seite verlässt, die die Verbindung geöffnet hat.
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
        Die Verbindung wird beendet, weil der Endpunkt Daten eines Typs empfangen hat, den er nicht akzeptieren kann. (Zum Beispiel hat ein nur-Text-Endpunkt Binärdaten empfangen.)
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
        <strong>Reserviert.</strong> Gibt an, dass kein Statuscode bereitgestellt wurde, obwohl einer erwartet wurde.
      </td>
    </tr>
    <tr>
      <td><code>1006</code></td>
      <td>Anormaler Abschluss</td>
      <td>
       <strong>Reserviert.</strong> Gibt an, dass eine Verbindung anormal geschlossen wurde (d.h. ohne dass ein Schluss-Frame gesendet wird), wenn ein Statuscode erwartet wird.
      </td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>Ungültige Frame-Payload-Daten</td>
      <td>
        Der Endpunkt beendet die Verbindung, da eine Nachricht empfangen wurde, die inkonsistente Daten enthält (z.B. nicht-UTF-8-Daten in einer Textnachricht).
      </td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>Richtlinienverstoß</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil er eine Nachricht erhalten hat, die gegen seine Richtlinien verstößt. Dies ist ein generischer Statuscode, der verwendet wird, wenn die Codes 1003 und 1009 nicht geeignet sind.
      </td>
    </tr>
    <tr>
      <td><code>1009</code></td>
      <td>Nachricht zu groß</td>
      <td>
        Der Endpunkt beendet die Verbindung, da ein Daten-Frame empfangen wurde, das zu groß ist.
      </td>
    </tr>
    <tr>
      <td><code>1010</code></td>
      <td>Verpflichtende Erweiterung</td>
      <td>
        Der Client beendet die Verbindung, weil er erwartete, dass der Server eine oder mehrere Erweiterungen verhandelt, dies jedoch nicht tat.
      </td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>Interner Fehler</td>
      <td>
        Der Server beendet die Verbindung, weil er eine unerwartete Bedingung angetroffen hat, die ihn daran gehindert hat, die Anfrage zu erfüllen.
      </td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Dienst-Neustart</a></td>
      <td>
        Der Server beendet die Verbindung, weil er neu startet.
      </td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Versuchen Sie es später erneut</a></td>
      <td>
        Der Server beendet die Verbindung aufgrund einer temporären Bedingung, z.B. ist er überlastet und trennt einige seiner Clients.
      </td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/VOLI2xp4tzFnIFYespe6oOtpFXA/">Schlechtes Gateway</a></td>
      <td>
        Der Server fungierte als Gateway oder Proxy und erhielt eine ungültige Antwort vom Upstream-Server. Dies ist ähnlich wie der HTTP-Statuscode 502.
      </td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS-Handshake</td>
      <td>
        <strong>Reserviert.</strong> Gibt an, dass die Verbindung aufgrund eines Fehlers beim Ausführen eines TLS-Handshakes geschlossen wurde (z.B. kann das Serverzertifikat nicht verifiziert werden).
      </td>
    </tr>
    <tr>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>
        Zur Definition durch zukünftige Revisionen der WebSocket-Protokollspezifikation und zur Definition durch Erweiterungsspezifikationen.
      </td>
    </tr>
    <tr>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>
        Zur Nutzung durch Bibliotheken, Frameworks und Anwendungen. Diese Statuscodes sind <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">direkt bei IANA registriert</a>. Die Interpretation dieser Codes ist durch das WebSocket-Protokoll nicht definiert.
      </td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
         Zur privaten Nutzung und können daher nicht registriert werden. Solche Codes können durch vorherige Vereinbarungen zwischen WebSocket-Anwendungen verwendet werden. Die Interpretation dieser Codes ist durch das WebSocket-Protokoll nicht definiert.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel druckt den Wert von `code` in die Konsole.

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

- [RFC 6455](https://www.rfc-editor.org/info/rfc6455/) (Die WebSocket-Protokollspezifikation)
- [WebSocket Close Code Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#close-code-number) (IANA)
