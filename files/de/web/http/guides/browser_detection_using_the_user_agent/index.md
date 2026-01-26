---
title: Browser-Erkennung mit dem User-Agent-String (UA-Sniffing)
short-title: Browser-Erkennung über den UA-String
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

Bei jeder Anfrage an einen Server senden Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}}-Header mit einem Wert, der als {{Glossary("user_agent", "user agent")}} (UA) String bezeichnet wird.
Dieser String soll den Browser, dessen Versionsnummer und dessen Host-Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)-Eigenschaft in JavaScript auf diesen String zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu parsen (manchmal als "UA-Sniffing" bezeichnet) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern, aber dies ist sehr schwierig zuverlässig umzusetzen und oft die Ursache für Fehler.

Dieses Dokument beschreibt häufige Fallstricke bei der Verwendung des UA-Strings zur Browser-Erkennung sowie empfohlene Alternativen.
Am Ende geben wir einige Hinweise zur UA-Detektion mittels des Strings, aber Sie sollten dies nur tun, wenn es absolut notwendig ist!

## Warum Feature-Erkennung besser ist als Browser-Erkennung

Um zu veranschaulichen, warum der Versuch, die Funktionalität der Website pro Browser anzupassen, Komplexität und mögliche Fehler einführt, betrachten Sie das folgende Beispiel.
Eine Anwendung möchte eine `splitUpString()`-Funktion in JavaScript unter Verwendung von [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) verwenden:

```js example-bad
let splitUpString;

if (navigator.userAgent.includes("Chrome")) {
  const camelCaseExpression = new RegExp("(?<=[A-Z])");
  splitUpString = (str) => String(str).split(camelCaseExpression);
} else {
  // This fallback is inefficient, but it works
  splitUpString = (str) =>
    String(str)
      .split(/(.*?[A-Z])/)
      .filter(Boolean);
}
console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

Dieser Code macht mehrere Annahmen, die falsch sein können und den Code brechen, wenn er im falschen Browser oder der falschen Browserversion ausgeführt wird:

1. Alle User-Agent-Strings, die den Substring `Chrome` enthalten, deuten auf einen Chrome-Browser hin.

   Eines der größten Probleme der Browser-Erkennung auf Basis von UA-Strings ist, dass Browser und User-Agents routinemäßig vorgeben, ein anderer Browser zu sein, oder Informationen basierend auf mehreren Browsern enthalten.

2. Die Lookbehind-Funktion ist immer verfügbar, wenn der Browser Chrome ist.
   In Wirklichkeit könnte der Browser eine ältere Chrome-Version sein, bevor die Unterstützung hinzugefügt wurde, oder es könnte eine später Version von Chrome sein, die sie entfernt.
3. Am wichtigsten ist, dass angenommen wird, dass kein anderer Browser die Funktion unterstützt, obwohl sie jederzeit in jedem anderen Browser hinzugefügt werden könnte.
   Alle nicht übereinstimmenden Browser sind dazu verdammt, auf einen ineffizienten Fallback zurückzugreifen.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der verwendeten Browser-Erkennungsmethode bestehen; UA-Sniffing, Client-Hinweise, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header usw.
Zu wissen, welcher Browser verwendet wird, ist irrelevant. Was wir in diesem Fall tatsächlich suchen, ist die Funktionsprüfung, die im Folgenden ausführlicher beschrieben wird.

## Alternativen zum UA-Sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browser-Erkennung, die robuster sind und in vielen Szenarien besser anwendbar als UA-Sniffing.

### Feature-Erkennung

Bei der Feature-Erkennung wird überprüft, ob eine bestimmte Funktion für den Client verfügbar ist, anstatt festzustellen, welcher Browser Ihre Seite rendert.
Für Fälle, in denen eine Funktion nicht unterstützt wird, verwenden Sie stattdessen einen Fallback.
Das folgende Feature-Erkennungsbeispiel prüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt.
Das können Sie prüfen, indem Sie nach einer `geolocation`-Eigenschaft im globalen [`Navigator`](/de/docs/Web/API/Navigator)-Objekt suchen.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Das können Sie für viele Features tun.
Beispielsweise können Sie feststellen, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird usw.:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Styles können Sie auch in CSS mit der {{cssxref("@supports")}} At-Regel eine Feature-Erkennung durchführen, kombiniert mit dem `not` Schlüsselwort, wenn Sie das Fehlen einer Funktion prüfen möchten.
Sehen Sie [Using feature queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) für Informationen zur Verwendung in CSS.

```css
@supports (display: grid) {
  .box {
    display: grid;
    gap: 2rem;
  }
}

@supports not (property: value) {
  /* CSS rules for fallback */
}
```

In seltenen Fällen, in denen sich das Verhalten zwischen Browsern bei einer Funktion unterscheidet, sollten Sie testen, wie Browser die API implementieren und bestimmen, wie sie basierend auf diesem Wissen eingesetzt werden kann.
Um mehr zu erfahren, siehe die Dokumentation [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Mobilgeräte-Erkennung

Ein häufiger Missbrauch von UA-Sniffing (und [Client-Hinweisen](#client-hinweise)) ist das Erkennen, ob der Client ein Mobilgerät ist.
In der Regel sind Menschen eigentlich motiviert zu erkennen, ob das Gerät des Benutzers **touchfreundlich** ist und einen kleinen Bildschirm besitzt, um ihre Website zu optimieren, indem sie beispielsweise zusätzlichen Abstand zu Schaltflächen hinzufügen.

Stattdessen sollten Sie Features mithilfe moderner APIs erkennen.
Um beispielsweise die Unterstützung für Touch zu prüfen, verwenden Sie die [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft in der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Anforderungen, wie Layout, verwenden Sie modernes CSS wie [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) für flexible Layouts.
Anstatt Inhalte auf kleineren Bildschirmen zu verbergen, passen Sie das Layout dynamisch an.
[Media queries](/de/docs/Web/CSS/Guides/Media_queries) sollten die meisten Layout-Änderungen handhaben, was den Bedarf an JavaScript-basierten Anpassungen verringert.

Wenn Sie sicherstellen möchten, dass Übergänge reibungslos ablaufen, wenn Benutzer ihre Geräte drehen oder zwischen verschiedenen Bildschirmmodi wechseln, können Sie sich [Device orientation detection](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) anschauen.
Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), obwohl Sie die Kompatibilitätsdaten überprüfen sollten, da die Unterstützung stark variiert.

### Client-Hinweise

Für Browser, die auf Blink basieren (Chromium, Edge, Brave, Vivaldi usw.), ist eine Alternative [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints).
Bei Client-Hinweisen fordert der Server proaktiv Geräteinformationen von einem Client über HTTP-Header oder über die [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client-Hinweise sind zum Erkennen von Blink-basierten Browsern besser als UA-Sniffing, da sie nicht so häufig gefälscht werden und kleinere, zuverlässigere Informationseinheiten bieten, die einfacher zu parsen sind.
Die Änderung der Website-Funktionalität basierend auf Client-Hinweisen ist jedoch immer noch eine schlechte Idee!
Wo möglich sollten Sie stattdessen Feature-Erkennung und progressive Verbesserung verwenden [wie oben beschrieben](#warum_feature-erkennung_besser_ist_als_browser-erkennung).

Beispielsweise enthält der Server im HTTP-Mechanismus einen {{httpheader("Accept-CH")}}-Header zusammen mit einer Liste von Headern, die der Client bei nachfolgenden Anfragen einfügen soll.
Nehmen wir an, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Damit werden die folgenden Header vom Client bei nachfolgenden Anfragen angefordert:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein Boolean zur Angabe, ob der Client ein Mobilgerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client arbeitet ("Windows", "Android" usw.).
- {{httpheader("Sec-CH-UA")}}: die Branding- und bedeutende Versionsinformation des User-Agents.

Angenommen, der Client unterstützt Client-Hinweise, könnten die UA-Client-Hinweise folgendermaßen bei nachfolgenden Anfragen aussehen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hinweise zu erfahren, sehen Sie [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints).
Stellen Sie sicher, die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) vor der Verwendung dieser Funktion zu überprüfen.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive Enhancement")}}
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in 'Schichten', mit einem Bottom-up-Ansatz, beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinanderfolgenden Schichten, die jeweils mehr Features nutzen.
- {{Glossary("Graceful_degradation", "Graceful Degradation")}}
  - : Dies ist ein Top-Down-Ansatz, bei dem Sie die bestmögliche Website erstellen, indem Sie alle gewünschten Funktionen nutzen, und sie dann anpassen, um auf älteren Browsern zu funktionieren. Das kann schwieriger sein und weniger effektiv als progressive Verbesserung, aber in einigen Fällen nützlich sein.

## Ungültige Gründe für die Nutzung von Browser-Erkennung

Wenn Sie immer noch Browser-Erkennung statt Funktionsprüfung und progressive Verbesserung in Betracht ziehen, prüfen Sie, ob Sie von den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen bestimmten Fehler in einer bestimmten Browserversion zu umgehen**
  - : Sie sind wahrscheinlich nicht die erste Person, die damit konfrontiert wird.
    Experten oder Menschen mit einer anderen Perspektive können Ihnen Hinweise geben, um den Fehler besser zu vermeiden oder zu umgehen.
    Wenn das Problem ungewöhnlich ist, ist es sinnvoll zu prüfen, ob dieser Fehler dem Browser-Hersteller über Fehlerverfolgungssysteme gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)).
    Browser-Entwickler achten auf Fehlerberichte, und Ihrer kann helfen, ein Problem zu beheben oder eine zuverlässigere Umgehungslösung zu finden.
- **Unterschiedliches HTML je nach Browser des Besuchers ausliefern**
  - : Das ist normalerweise eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist.
    Können Sie es vermeiden, indem Sie nicht-semantische {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Elemente hinzufügen?
    Überlegen Sie, ob es tatsächlich ein Problem mit Ihrem Design gibt: Können Sie progressive Verbesserung oder flexible Layouts verwenden, um Ihren Bedarf dafür zu beseitigen?
    Der Aufwand für die genaue UA-Detektion im Vergleich zur Überarbeitung Ihres HTML sollte ein entscheidender Faktor sein.
- **Versuchen herauszufinden, ob der Browser eines Besuchers ein bestimmtes Feature hat**
  - : Ihre Website muss ein bestimmtes Feature verwenden, das einige Browser noch nicht unterstützen, und Sie möchten, dass Benutzern mit inkompatiblen Browsern eine ältere Website mit weniger Funktionen, die Sie kennen und die funktionieren werden, angeboten wird.
    Das ist der schlechteste Grund für die Verwendung von UA-Detektion, da letztlich alle Browser wahrscheinlich aufholen werden.
    Außerdem ist es nicht praktikabel, für jedes Feature jeden Browser auf diese Weise zu testen.

## Relevante UA-String-Bestandteile extrahieren

Wenn Sie alle oben genannten Optionen erkundet haben und immer noch den UA-String als letztes Mittel parsen müssen, finden Sie in diesem Abschnitt einige Hinweise, die helfen können.
Leider gibt es keine Einheitlichkeit bei den verschiedenen Teilen des User-Agent-Strings, weshalb dieser Teil so heikel ist.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("engine/rendering", "Rendering-Engine")}} teilen, stellen eine Seite auf dieselbe Weise dar: Es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktioniert.
Es gibt drei aktive Haupt-Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, was darauf hinweist, dass die Rendering-Engine `Gecko` ist, und der "gecko-Trail" ist der feste String `20100101`, was "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Die Erkennung von Rendering-Engine-Namen ist auf Websites üblich, und viele User-Agents haben historisch gesehen andere Rendering-Namen hinzugefügt, um zu vermeiden, dass Websites sie basierend auf dem Namen der Rendering-Engine ausschließen.
Daher ist es wichtig darauf zu achten, keine falsch-positiven Ergebnisse bei der Erkennung der Rendering-Engine auszulösen, da diese Methode besonders unzuverlässig ist.
Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                                                 |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                         |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                         |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko`-String hinzu, der ein falsch-positives Ergebnis für Gecko auslösen könnte, wenn die Erkennung nicht sorgfältig angewendet wird. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                                       |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink').                                                                      |

### Rendering-Engine-Version

Die meisten Rendering-Engines stellen die Versionsnummer im Format `RenderingEngine/VersionNumber` bereit, mit der bemerkenswerten Ausnahme von Gecko.
Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Version der Rendering-Engine `138.0` ist, was der gleichen wie der Firefox-Version entspricht:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browser-Name und -Version

Wenn Menschen von "Browser-Erkennung" sprechen, meinen sie tatsächlich oft "Rendering-Engine-Erkennung".
Das bedeutet in der Regel die Erkennung von "Gecko" oder "WebKit" im Gegensatz zu "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber`.
Da der Name jedoch nicht die einzige Information im User-Agent-String in diesem Format ist, können Sie den Browser-Namen nicht herausfinden, sondern nur überprüfen, ob der gesuchte Name vorhanden ist.
Der Browser-Name ist der String `Firefox/138.0` im folgenden Beispiel, was darauf hinweist, dass der Browser-Name `Firefox` ist und die Software-Version `138.0` ist:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome beispielsweise meldet sowohl Chrome als auch Safari.
Um Safari zu erkennen, müssen Sie daher nach dem Safari-String und dem Fehlen des Chrome-Strings suchen, Chromium meldet sich oft selbst als Chrome, und SeaMonkey meldet sich selbst als Firefox.

Seien Sie vorsichtig beim Verwenden regulärer Ausdrücke auf dem `BrowserName`-Teil, da User-Agents auch Strings um das Keyword/Wert-Syntax enthalten.
Safari & Chrome enthalten beispielsweise den String `like Gecko`.

| Browser-Name                       | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz` \* | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz`-Token und eine benutzerfreundliche in einem `Version/xyz`-Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese Tokens in bestimmten Fällen nicht nachahmt.
Deshalb ist die Browsererkennung mit dem User-Agent-String unzuverlässig und sollte nur mit der Prüfung der Versionsnummer durchgeführt werden (das Nachahmen vergangener Versionen ist weniger wahrscheinlich).

### Betriebssystem-Erkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht auf Web-fokussierten Plattformen), aber das Format variiert.
Es ist ein fester String zwischen zwei Semikolons im Kommentarteil des User-Agents und diese Strings sind für jeden Browser spezifisch.

Sie geben das Betriebssystem an und oft seine Version sowie Informationen zur zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).
Im folgenden Beispiel lautet der String `Intel Mac OS X 10.15`:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, daher sollten Sie sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browsern verwenden, sodass Muster im Voraus bekannt sind.
Erwägen Sie eine Besucher- oder UA-String-Umfrage, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobilgerät, Tablet oder Desktop

Der häufigste Grund für das Durchführen von User-Agent-Sniffing ist die Bestimmung, auf welchem Gerätetyp der Browser ausgeführt wird.

- Nehmen Sie niemals an, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft.
  Insbesondere sollten Sie sich nicht auf unterschiedliche Standardeinstellungen für verschiedene Browser oder Rendering-Engines verlassen.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop ausgeführt wird.
  Das Betriebssystem kann auf mehr als einem Gerätetyp laufen (z. B. läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter anzeigen, dass ihre Browser auf einem Mobilgerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                      | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können nach dem String `Mobi` überall im UA-String suchen.
Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Website bereitstellen (die als Best Practice ohnehin Touch-Eingaben unterstützen sollte, da Desktop-Geräte möglicherweise Touchscreens haben).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementierung der Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migration zu User-Agent-Client-Hinweisen](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
