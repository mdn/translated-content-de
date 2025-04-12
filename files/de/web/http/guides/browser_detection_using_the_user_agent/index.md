---
title: Browser-Erkennung mithilfe des User-Agent-Strings (UA sniffing)
short-title: Browser-Erkennung mithilfe des UA-Strings
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{HTTPSidebar}}

Bei jeder Anfrage an einen Server fügen Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}}-Header mit einem Wert hinzu, der als {{Glossary("user_agent", "User Agent")}} (UA)-String bezeichnet wird.
Dieser String soll den Browser, seine Versionsnummer und das Host-Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auf diesen String auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) Eigenschaft in JavaScript zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu parsen (manchmal als "UA sniffing" bezeichnet) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern. Das ist jedoch sehr schwer zuverlässig zu tun und oft ein Grund für Bugs.

Dieses Dokument beschreibt häufige Fallstricke bei der Verwendung des UA-Strings zur Browser-Erkennung und die empfohlenen Alternativen.
Am Ende geben wir einige Hinweise für die UA-Erkennung mithilfe des Strings, aber Sie sollten dies nur tun, wenn es absolut notwendig ist!

## Warum Feature Detection besser ist als Browser-Erkennung

Um zu veranschaulichen, warum der Versuch, die Funktionalität der Website pro Browser anzupassen, Komplexität und mögliche Fehler einführt, betrachten Sie folgendes Beispiel.
Eine Anwendung möchte eine `splitUpString()`-Funktion in JavaScript unter Verwendung der [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) nutzen:

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

Dieser Code macht mehrere Annahmen, die falsch sein könnten, und der Code wird brechen, wenn er im falschen Browser oder in der falschen Browserversion ausgeführt wird:

1. Alle User Agent-Strings, die das Substring `Chrome` enthalten, deuten auf einen Chrome-Browser hin.

   Eines der größten Probleme bei der Browser-Erkennung basierend auf UA-Strings ist, dass Browser und User Agents routinemäßig vorgeben, ein anderer Browser zu sein, oder Informationen auf Basis mehrerer Browser enthalten.

2. Die Lookbehind-Funktion ist immer verfügbar, wenn der Browser Chrome ist.
   In Wirklichkeit könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder eine spätere Version von Chrome, die dieses Feature entfernt hat.
3. Am wichtigsten ist, dass angenommen wird, dass keine anderen Browser das Feature unterstützen, obwohl es jederzeit zu einem anderen Browser hinzugefügt werden könnte.
   Alle nicht übereinstimmenden Browser werden gezwungen, ein ineffizientes Fallback zu verwenden.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode zur Browser-Erkennung existieren: UA sniffing, Client Hints, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header usw.
Zu wissen, welcher Browser verwendet wird, ist irrelevant; worum es tatsächlich geht, ist Feature Detection, die im Folgenden ausführlicher beschrieben wird.

## Alternativen zum UA sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browser-Erkennung, die robuster und auf viele Szenarien anwendbar sind als UA sniffing.

### Feature Detection

Feature Detection bedeutet, zu überprüfen, ob eine bestimmte Funktion dem Client zur Verfügung steht, anstatt herauszufinden, welcher Browser Ihre Seite rendert.
Für Fälle, in denen eine Funktion nicht unterstützt wird, verwenden Sie stattdessen ein Fallback.
Im folgenden Beispiel zur Feature Detection wird geprüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt.
Dies können Sie tun, indem Sie prüfen, ob eine `geolocation`-Eigenschaft im globalen [`Navigator`](/de/docs/Web/API/Navigator) Objekt verfügbar ist.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Dies können Sie für viele Funktionen tun.
Zum Beispiel können Sie feststellen, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird und so weiter:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Styles können Sie auch Feature Detection in CSS mithilfe der [`@supports`](/de/docs/Web/CSS/@supports) Regel und dem `not` Schlüsselwort durchführen, wenn Sie prüfen möchten, ob ein Feature nicht vorhanden ist.
Siehe [Using feature queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) für Informationen zur Verwendung dieses Features in CSS.

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

In seltenen Fällen, in denen sich das Verhalten zwischen Browsern für ein Feature unterscheidet, sollten Sie testen, wie Browser die API implementieren und wie Sie sie basierend darauf verwenden können.
Um mehr zu erfahren, siehe die Dokumentation [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Mobilgeräteerkennung

Ein häufiger Missbrauch von UA sniffing (und [Client Hints](#client_hints)) ist es, zu erkennen, ob der Client ein Mobilgerät ist.
Normalerweise möchten Leute tatsächlich erkennen, ob das Gerät des Benutzers **touch-freundlich** ist und einen kleinen Bildschirm hat, damit sie ihre Website optimieren können, indem sie beispielsweise zusätzliche Abstände zu Schaltflächen hinzufügen.

Stattdessen sollten Sie Funktionen mithilfe moderner APIs erkennen.
Um beispielsweise auf Touch-Unterstützung zu prüfen, verwenden Sie die [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft in der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Anliegen, wie Layout, verwenden Sie modernes CSS wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid](/de/docs/Web/CSS/CSS_grid_layout) für flexible Layouts.
Anstatt Inhalte auf kleineren Bildschirmen zu verstecken, passen Sie das Layout dynamisch an.
[Media Queries](/de/docs/Web/CSS/CSS_media_queries) sollten die meisten Layoutänderungen bewältigen, wodurch der Bedarf an JavaScript-basierten Anpassungen reduziert wird.

Wenn Sie sicherstellen möchten, dass beim Drehen des Geräts oder beim Wechsel zwischen verschiedenen Bildschirmmodi reibungslose Übergänge erfolgen, können Sie sich [Detecting device orientation](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) ansehen.
Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), aber stellen Sie sicher, dass Sie die Kompatibilitätsdaten überprüfen, da die Unterstützung stark variiert.

### Client Hints

Für Blink-basierte Browser (Chromium, Edge, Brave, Vivaldi usw.) ist eine Alternative die [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints).
Bei Client Hints fordert der Server proaktiv Geräteinformationen von einem Client über HTTP-Header oder über die [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client Hints sind besser als UA sniffing zur Erkennung von Blink-basierten Browsern, da sie nicht so häufig gefälscht werden und kleinere, zuverlässigere Informationsteile bieten, die leichter zu parsen sind.
Es bleibt dennoch eine schlechte Idee, die Funktionalität der Website basierend auf Client Hints zu ändern!
Wo immer möglich, sollten Sie stattdessen Feature Detection und progressive Verbesserung einsetzen [wie oben beschrieben](#warum_feature_detection_besser_ist_als_browser-erkennung).

Beispielsweise enthält der Server im HTTP-Mechanismus einen {{httpheader("Accept-CH")}}-Header zusammen mit einer Liste von Headern, die vom Client in späteren Anfragen enthalten sein sollen.
Angenommen, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies erfragt die folgenden Header vom Client in späteren Anfragen:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein boolean, der angibt, ob es sich beim Client um ein Mobilgerät handelt.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client läuft ("Windows", "Android" usw.).
- {{httpheader("Sec-CH-UA")}}: die Markeninformationen des User-Agents und bedeutende Versionsdetails.

Angenommen, der Client unterstützt Client Hints, können die UA Client Hints in späteren Anfragen erscheinen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client Hints zu erfahren, siehe [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints).
Stellen Sie sicher, dass Sie die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) Details überprüfen, bevor Sie dieses Feature verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive enhancement")}}
  - : Diese Designtechnik beinhaltet, Ihre Website in "Schichten" zu entwickeln, beginnend mit einer einfacheren Schicht und die Fähigkeiten der Seite in aufeinanderfolgenden Schichten zu verbessern, wobei jede Schicht mehr Features nutzt.
- {{Glossary("Graceful_degradation", "Graceful degradation")}}
  - : Dies ist ein Top-Down-Ansatz, wobei Sie die bestmögliche Seite mit allen gewünschten Features erstellen und diese dann anpassen, um auf älteren Browsern zu funktionieren. Dies kann schwieriger umzusetzen sein und ist oft weniger effektiv als progressive Verbesserung, kann aber in einigen Fällen nützlich sein.

## Ungültige Gründe zur Nutzung von Browser-Erkennung

Wenn Sie immer noch Browser-Erkennung anstelle von Feature Detection und progressiver Verbesserung in Betracht ziehen, überprüfen Sie, ob Sie aus den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen spezifischen Bug in einer bestimmten Browserversion zu umgehen**
  - : Sie sind wahrscheinlich nicht die erste Person, die auf ihn stößt.
    Experten oder Personen mit einer anderen Perspektive können Ihnen Hinweise geben, den Bug besser zu vermeiden oder zu umgehen.
    Wenn das Problem ungewöhnlich ist, lohnt es sich zu prüfen, ob dieser Fehler dem Browser-Hersteller über Bug-Tracking-Systeme gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)).
    Browser-Hersteller achten auf Bug-Meldungen und Ihre könnte helfen, das Problem zu beheben oder zuverlässigere Workarounds bereitzustellen.
- **Unterschiedliches HTML abhängig vom Browser des Besuchers ausliefern**
  - : Dies ist in der Regel eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist.
    Können Sie dies verhindern, indem Sie nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen?
    Ziehen Sie in Betracht, ob tatsächlich ein Designproblem vorliegt: Können Sie progressive Verbesserungen oder flexible Layouts nutzen, um Ihren Bedarf daran zu verringern?
    Der Aufwand, eine genaue UA-Erkennung im Vergleich zur Überarbeitung Ihres HTML vorzunehmen, sollte ein entscheidender Faktor sein.
- **Versuchen herauszufinden, ob der Browser eines Besuchers ein bestimmtes Feature hat**
  - : Ihre Webseite muss ein bestimmtes Feature verwenden, das einige Browser noch nicht unterstützen, und Sie möchten Benutzern mit inkompatiblen Browsern eine ältere Website mit weniger Funktionen anbieten, die Sie wissen, dass sie funktionieren werden.
    Dies ist der schlechteste Grund, UA-Erkennung zu verwenden, weil alle Browser wahrscheinlich irgendwann nachziehen werden.
    Außerdem ist es nicht praktisch, jeden Browser auf verschiedene Features in dieser Weise zu testen.

## Extrahieren relevanter UA-String-Teile

Wenn Sie alle obigen Optionen erkundet haben und immer noch den UA-String als letzten Ausweg parsen müssen, gibt es in diesem Abschnitt einige Hinweise, die Ihnen helfen werden.
Leider gibt es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings, so dass wir nun zu dem kniffligen Teil kommen.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} verwenden, werden eine Seite auf die gleiche Weise anzeigen: Es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktioniert.
Es gibt drei aktive große Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, was darauf hinweist, dass die Rendering-Engine `Gecko` ist und der "gecko-Trail" der feste String `20100101` ist, der "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Die Erkennung von Rendering-Engine-Namen ist auf Websites üblich, und viele User Agents haben in der Vergangenheit andere Rendering-Namen hinzugefügt, um zu verhindern, dass Websites sie alleine aufgrund des Rendering-Engine-Namens ausschließen.
Daher ist es wichtig, darauf zu achten, keine falschen Positiven auszulösen, wenn die Rendering-Engine erkannt wird, da diese Methode besonders unzuverlässig ist.
Betrachten Sie den folgenden UA-String, der in Chrome 134 unter macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                                           |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                   |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                   |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko`-String hinzu, der möglicherweise falsche Positive für Gecko auslöst, wenn die Erkennung nicht sorgfältig angewendet wird. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                                 |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink').                                                                |

### Rendering-Engine-Version

Die meisten Rendering-Engines geben die Versionsnummer im `RenderingEngine/VersionNumber` Token an, mit der bemerkenswerten Ausnahme von Gecko.
Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Rendering-Engine-Versionsnummer `138.0` und die gleiche wie die Firefox-Version ist:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browser-Name und -Version

Wenn Leute sagen, sie wollen "Browser-Erkennung", meinen sie eigentlich oft "Rendering-Engine-Erkennung".
Das bedeutet in der Regel, "Gecko" oder "WebKit" zu erkennen statt "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber`.
Da der Name jedoch nicht die einzige Information in einem User-Agent-String in diesem Format ist, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der gesuchte Name vorhanden ist.
Der Browsername ist der String `Firefox/138.0` im folgenden Beispiel, was darauf hinweist, dass der Browsername `Firefox` und die Softwareversion `138.0` ist:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome zum Beispiel meldet sowohl Chrome als auch Safari.
Um Safari zu erkennen, müssen Sie nach dem Safari-String und der Abwesenheit des Chrome-Strings suchen, Chromium meldet sich oft auch als Chrome und SeaMonkey meldet sich als Firefox.

Seien Sie vorsichtig, wenn Sie reguläre Ausdrücke für den `BrowserName`-Teil verwenden, da User Agents auch Strings um die Keyword/Value-Syntax enthalten.
Safari & Chrome enthalten zum Beispiel den String `like Gecko`.

| Browser-Name                       | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz` \* | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz` Token und eine benutzerfreundliche in einem `Version/xyz` Token.

Natürlich gibt es keine Garantie, dass ein anderer Browser diese in bestimmten Fällen nicht nachgeahmt.
Deshalb ist die Browser-Erkennung mithilfe des User-Agent-Strings unzuverlässig und sollte nur mit der Kontrolle der Versionsnummer durchgeführt werden (das Nachahmen früherer Versionen ist weniger wahrscheinlich).

### Betriebssystem-Erkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht auf web-fokussierten Plattformen), aber das Format variiert.
Es ist ein fester String zwischen zwei Semikolons im Kommentarteil des User Agent und diese Strings sind spezifisch für jeden Browser.

Sie geben das Betriebssystem an und oft seine Version und Informationen zur zugrundeliegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows PCs).
Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, daher sollten Sie sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden, damit Muster im Voraus bekannt sind.
Berücksichtigen Sie eine Besucher- oder UA-String-Umfrage, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobil, Tablet oder Desktop

Der häufigste Grund für das User-Agent-Sniffing ist die Bestimmung, auf welchem Gerätetyp der Browser ausgeführt wird.

- Nehmen Sie niemals an, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp ausgeführt wird.
  Insbesondere verlassen Sie sich nicht auf verschiedene Standards für unterschiedliche Browser oder Rendering-Engines.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop läuft.
  Das Betriebsystem kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browser-Anbieter angeben, dass ihre Browser auf einem Mobilgerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                      | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/`-Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können irgendwo im UA-String nach dem String `Mobi` suchen.
Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktopseite ausliefern (die, als beste Praxis, ohnehin Touch-Eingaben unterstützen sollte, da Desktop-Geräte Touchscreens haben könnten).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
