---
title: "CloseEvent: code-Eigenschaft"
short-title: code
slug: Web/API/CloseEvent/code
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die **`code`**-Eigenschaft der schreibgeschützten [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Schnittstelle gibt einen [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) zurück, der den Grund für die Trennung der Verbindung angibt.

## Wert

Ein ganzzahliger [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) im Bereich von `1000` bis `4999`, der den Grund für die Trennung der Verbindung angibt.

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
      <td>Normale Schließung</td>
      <td>Die Verbindung hat den Zweck, für den sie erstellt wurde, erfolgreich abgeschlossen.</td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>Geht weg</td>
      <td>Der Endpunkt ist nicht mehr vorhanden, entweder aufgrund eines Serverfehlers oder weil der Browser von der Seite weg navigiert, die die Verbindung geöffnet hat.</td>
    </tr>
    <tr>
      <td><code>1002</code></td>
      <td>Protokollfehler</td>
      <td>Der Endpunkt beendet die Verbindung aufgrund eines Protokollfehlers.</td>
    </tr>
    <tr>
      <td><code>1003</code></td>
      <td>Nicht unterstützte Daten</td>
      <td>Die Verbindung wird beendet, weil der Endpunkt Daten eines Typs erhalten hat, den er nicht akzeptieren kann (z. B. hat ein nur Text unterstützender Endpunkt Binärdaten erhalten).</td>
    </tr>
    <tr>
      <td><code>1004</code></td>
      <td>Reserviert</td>
      <td><strong>Reserviert.</strong> Möglicherweise wird in Zukunft eine Bedeutung definiert.</td>
    </tr>
    <tr>
      <td><code>1005</code></td>
      <td>Kein Status empfangen</td>
      <td><strong>Reserviert.</strong> Zeigt an, dass kein Statuscode bereitgestellt wurde, obwohl einer erwartet wurde.</td>
    </tr>
    <tr>
      <td><code>1006</code></td>
      <td>Abnormale Schließung</td>
      <td><strong>Reserviert.</strong> Zeigt an, dass eine Verbindung abnormal geschlossen wurde (d.h. ohne dass ein Schluss-Frame gesendet wurde), wenn ein Statuscode erwartet wird.</td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>Ungültige Frame-Nutzdaten</td>
      <td>Der Endpunkt beendet die Verbindung, weil eine Nachricht empfangen wurde, die inkonsistente Daten enthielt (z.B. nicht UTF-8 Daten innerhalb einer Textnachricht).</td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>Politikverletzung</td>
      <td>Der Endpunkt beendet die Verbindung, weil er eine Nachricht erhalten hat, die seine Richtlinien verletzt. Dies ist ein generischer Statuscode, der verwendet wird, wenn die Codes 1003 und 1009 nicht geeignet sind.</td>
    </tr>
    <tr>
      <td><code>1009</code></td>
      <td>Nachricht zu groß</td>
      <td>Der Endpunkt beendet die Verbindung, weil ein Datenframe empfangen wurde, der zu groß ist.</td>
    </tr>
    <tr>
      <td><code>1010</code></td>
      <td>Obligatorische Erweiterung</td>
      <td>Der Client beendet die Verbindung, weil er erwartet hat, dass der Server eine oder mehrere Erweiterungen verhandelt, dies aber nicht getan hat.</td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>Interner Fehler</td>
      <td>Der Server beendet die Verbindung, weil er auf eine unerwartete Bedingung gestoßen ist, die ihn daran gehindert hat, die Anfrage zu erfüllen.</td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Dienstneustart</a></td>
      <td>Der Server beendet die Verbindung, weil er neu gestartet wird.</td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Versuchen Sie es später erneut</a></td>
      <td>Der Server beendet die Verbindung aufgrund einer temporären Bedingung, z.B. ist er überlastet und trennt einige seiner Clients.</td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/VOLI2xp4tzFnIFYespe6oOtpFXA/">Schlechtes Gateway</a></td>
      <td>Der Server fungierte als Gateway oder Proxy und erhielt eine ungültige Antwort vom Upstream-Server. Dies ist ähnlich wie der HTTP-Statuscode 502.</td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS-Handschlag</td>
      <td><strong>Reserviert.</strong> Zeigt an, dass die Verbindung aufgrund eines Fehlers beim Durchführen eines TLS-Handshakes geschlossen wurde (z.B., das Serverzertifikat kann nicht verifiziert werden).</td>
    </tr>
    <tr>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>Zur Definition in zukünftigen Überarbeitungen der WebSocket-Protokollspezifikation und zur Definition durch Erweiterungsspezifikationen.</td>
    </tr>
    <tr>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>Zur Verwendung durch Bibliotheken, Frameworks und Anwendungen. Diese Statuscodes sind <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">direkt bei der IANA registriert</a>. Die Interpretation dieser Codes ist durch das WebSocket-Protokoll nicht definiert.</td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>Für private Nutzung, und daher nicht registrierbar. Solche Codes können durch vorherige Vereinbarungen zwischen WebSocket-Anwendungen verwendet werden. Die Interpretation dieser Codes ist durch das WebSocket-Protokoll nicht definiert.</td>
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
