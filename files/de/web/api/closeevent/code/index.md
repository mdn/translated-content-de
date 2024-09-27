---
title: "CloseEvent: code-Eigenschaft"
short-title: code
slug: Web/API/CloseEvent/code
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die **`code`**-Eigenschaft der [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle gibt einen [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) zurück, der den Grund für das Schließen der Verbindung angibt.

## Wert

Ein ganzzahliger [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) im Bereich `1000` - `4999`, der den Grund für das Schließen der Verbindung angibt.

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
      <td>Nicht genutzt.</td>
    </tr>
    <tr>
      <td><code>1000</code></td>
      <td>Normale Schließung</td>
      <td>
        Die Verbindung hat den Zweck erfolgreich erfüllt, für den sie erstellt wurde.
      </td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>Abbruch</td>
      <td>
        Der Endpunkt wird geschlossen, entweder aufgrund eines Serverfehlers oder weil der Browser die Seite verlässt, die die Verbindung geöffnet hat.
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
        Die Verbindung wird beendet, weil der Endpunkt Daten eines Typs erhalten hat, die er nicht akzeptieren kann. (Zum Beispiel hat ein nur-textbasierter Endpunkt Binärdaten erhalten.)
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
      <td>Abnormale Schließung</td>
      <td>
        <strong>Reserviert.</strong> Gibt an, dass eine Verbindung abnormal geschlossen wurde (d.h. ohne dass ein Schlussframe gesendet wurde), wenn ein Statuscode erwartet wird.
      </td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>Ungültige Frame-Nutzdatendaten</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil eine Nachricht mit inkonsistenten Daten empfangen wurde (z.B. nicht-UTF-8-Daten in einer Textnachricht).
      </td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>Richtlinienverstoß</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil er eine Nachricht erhalten hat, die seine Richtlinie verletzt. Dies ist ein generischer Statuscode, der verwendet wird, wenn die Codes 1003 und 1009 nicht geeignet sind.
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
      <td>Verpflichtend. Ext.</td>
      <td>
        Der Client beendet die Verbindung, weil er erwartet hat, dass der Server eine oder mehrere Erweiterungen aushandelt, aber der Server tat dies nicht.
      </td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>Interner Fehler</td>
      <td>
        Der Server beendet die Verbindung, weil er eine unerwartete Bedingung festgestellt hat, die es ihm unmöglich machte, die Anforderung zu erfüllen.
      </td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Dienstneustart</a></td>
      <td>
        Der Server beendet die Verbindung, weil er neu gestartet wird.
      </td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Später erneut versuchen</a></td>
      <td>
        Der Server beendet die Verbindung aufgrund einer temporären Bedingung, z.B. er ist überlastet und wirft einige seiner Clients ab.
      </td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/VOLI2xp4tzFnIFYespe6oOtpFXA/">Schlechtes Gateway</a></td>
      <td>
        Der Server fungierte als Gateway oder Proxy und erhielt eine ungültige Antwort vom Upstream-Server. Dies ähnelt dem HTTP-Statuscode 502.
      </td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS-Handshake</td>
      <td>
        <strong>Reserviert.</strong> Gibt an, dass die Verbindung aufgrund eines Fehlers beim TLS-Handshake geschlossen wurde (z.B. kann das Serverzertifikat nicht überprüft werden).
      </td>
    </tr>
    <tr>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>
        Zur Definition durch zukünftige Revisionen der WebSocket-Protokoll-Spezifikation und zur Definition durch Erweiterungsspezifikationen.
      </td>
    </tr>
    <tr>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>
        Für die Verwendung durch Bibliotheken, Frameworks und Anwendungen. Diese Statuscodes sind <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">direkt bei der IANA registriert</a>. Die Interpretation dieser Codes wird durch das WebSocket-Protokoll nicht definiert.
      </td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
        Für den privaten Gebrauch und daher nicht registrierbar. Solche Codes können durch vorherige Vereinbarungen zwischen WebSocket-Anwendungen verwendet werden. Die Interpretation dieser Codes wird durch das WebSocket-Protokoll nicht definiert.
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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokoll-Spezifikation)
- [WebSocket Close Code Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#close-code-number) (IANA)
