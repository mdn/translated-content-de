---
title: "CloseEvent: code Eigenschaft"
short-title: code
slug: Web/API/CloseEvent/code
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`code`** des [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Interfaces gibt einen [WebSocket-Verbindungsabschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) zurück, der den Grund angibt, warum die Verbindung geschlossen wurde.

## Wert

Ein ganzzahliger [WebSocket-Verbindungsabschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) im Bereich von `1000` - `4999`, der den Grund für die Schließung der Verbindung angibt.

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
      <td>Normal Closure</td>
      <td>
        Die Verbindung hat den Zweck, für den sie erstellt wurde,
        erfolgreich abgeschlossen.
      </td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>Going Away</td>
      <td>
        Der Endpunkt wird beendet, entweder aufgrund eines Serverausfalls oder
        weil der Browser von der Seite, die die Verbindung geöffnet hat,
        weg navigiert.
      </td>
    </tr>
    <tr>
      <td><code>1002</code></td>
      <td>Protocol error</td>
      <td>
        Der Endpunkt beendet die Verbindung aufgrund eines Protokollfehlers.
      </td>
    </tr>
    <tr>
      <td><code>1003</code></td>
      <td>Unsupported Data</td>
      <td>
        Die Verbindung wird beendet, weil der Endpunkt Daten eines Typs
        erhalten hat, den er nicht akzeptieren kann. (Zum Beispiel hat ein
        nur-Text-Endpunkt Binärdaten erhalten.)
      </td>
    </tr>
    <tr>
      <td><code>1004</code></td>
      <td>Reserviert</td>
      <td>
        <strong>Reserviert.</strong> Eine Bedeutung könnte in der Zukunft
        definiert werden.
      </td>
    </tr>
    <tr>
      <td><code>1005</code></td>
      <td>No Status Rcvd</td>
      <td>
        <strong>Reserviert.</strong> Bedeutet, dass kein Statuscode angegeben
        wurde, obwohl einer erwartet wurde.
      </td>
    </tr>
    <tr>
      <td><code>1006</code></td>
      <td>Abnormal Closure</td>
      <td>
        <strong>Reserviert.</strong> Bedeutet, dass eine Verbindung auf
        anormale Weise geschlossen wurde (das heißt, ohne dass ein
        Abschlussframe gesendet wurde), obwohl ein Statuscode erwartet wird.
      </td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>Invalid frame payload data</td>
      <td>
        Der Endpunkt beendet die Verbindung, da eine Nachricht mit
        inkonsistenten Daten empfangen wurde (z.B., nicht-UTF-8-Daten innerhalb
        einer Textnachricht).
      </td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>Policy Violation</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil er eine Nachricht empfangen
        hat, die gegen seine Richtlinien verstößt. Dies ist ein generischer
        Statuscode, der verwendet wird, wenn die Codes 1003 und 1009 nicht
        geeignet sind.
      </td>
    </tr>
    <tr>
      <td><code>1009</code></td>
      <td>Message Too Big</td>
      <td>
        Der Endpunkt beendet die Verbindung, weil ein Datenrahmen empfangen
        wurde, der zu groß ist.
      </td>
    </tr>
    <tr>
      <td><code>1010</code></td>
      <td>Mandatory Ext.</td>
      <td>
        Der Client beendet die Verbindung, weil er erwartete, dass der Server
        eine oder mehrere Erweiterungen verhandelt, dies aber nicht tat.
      </td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>Internal Error</td>
      <td>
        Der Server beendet die Verbindung, weil er auf eine unerwartete
        Bedingung gestoßen ist, die ihn daran hinderte, die Anfrage zu
        erfüllen.
      </td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Service Restart</a></td>
      <td>
        Der Server beendet die Verbindung, weil er neu startet.
      </td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/P_1vbD9uyHl63nbIIbFxKMfSwcM/">Try Again Later</a></td>
      <td>
        Der Server beendet die Verbindung aufgrund einer vorübergehenden
        Bedingung, z.B., er ist überlastet und gibt einige seiner Clients
        auf.
      </td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://mailarchive.ietf.org/arch/msg/hybi/VOLI2xp4tzFnIFYespe6oOtpFXA/">Bad Gateway</a></td>
      <td>
        Der Server handelte als Gateway oder Proxy und erhielt eine ungültige Antwort vom Upstream-Server. Dies ist ähnlich wie der HTTP-Statuscode 502.
      </td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS handshake</td>
      <td>
        <strong>Reserviert.</strong> Bedeutet, dass die Verbindung aufgrund
        eines Fehlers beim TLS-Handshake geschlossen wurde (z.B. das
        Serverzertifikat kann nicht verifiziert werden).
      </td>
    </tr>
    <tr>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>
        Zur Definition durch zukünftige Überarbeitungen der WebSocket-Protokollspezifikation und zur Definition durch Erweiterungsspezifikationen.
      </td>
    </tr>
    <tr>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>
        Zur Verwendung durch Bibliotheken, Frameworks und Anwendungen. Diese Statuscodes sind <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">direkt bei der IANA registriert</a>. Die Interpretation dieser Codes ist durch das WebSocket-Protokoll nicht definiert.
      </td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
         Für private Nutzung und daher nicht registrierbar. Solche Codes können durch vorherige Vereinbarungen zwischen WebSocket-Anwendungen verwendet werden. Die Interpretation dieser Codes ist durch das WebSocket-Protokoll nicht definiert.
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
