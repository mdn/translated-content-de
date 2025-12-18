---
title: Browser-Erkennung mithilfe des User Agent-Strings (UA sniffing)
short-title: Browsererkennung mit dem UA-String
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

Bei jeder Anfrage an einen Server fügen Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}} Header hinzu, der einen {{Glossary("user_agent", "user agent")}} (UA) String enthält. Dieser String soll den Browser, seine Versionsnummer und das Host-Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auf diesen String auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) Eigenschaft in JavaScript zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu parsen (manchmal als "UA sniffing" bezeichnet) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern, aber dies ist sehr schwer zuverlässig zu tun und ist oft eine Ursache für Bugs.

Dieses Dokument beschreibt häufige Fallstricke der Verwendung des UA-Strings zur Browsererkennung und die empfohlenen Alternativen. Am Ende geben wir einige Hinweise zur UA-Erkennung mit dem String, aber Sie sollten dies nur tun, wenn es absolut notwendig ist!

## Warum Feature-Erkennung besser ist als Browsererkennung

Um zu veranschaulichen, warum der Versuch, die Funktionalität der Seite je nach Browser anzupassen, Komplexität und mögliche Fehler einführt, betrachten Sie das folgende Beispiel. Eine Anwendung möchte eine `splitUpString()`-Funktion in JavaScript unter Verwendung von [Lookbehind assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) verwenden:

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

Dieser Code trifft mehrere Annahmen, die falsch sein könnten und den Code brechen, wenn er auf dem falschen Browser oder der falschen Browserversion ausgeführt wird:

1. Alle User-Agent-Strings, die die Teilzeichenfolge `Chrome` enthalten, geben einen Chrome-Browser an.

   Eines der größten Probleme bei der Browsererkennung basierend auf UA-Strings ist, dass Browser und User Agents routinemäßig vorgeben, ein anderer Browser zu sein, oder Informationen basierend auf mehreren Browsern enthalten.

2. Das Lookbehind-Feature ist immer verfügbar, wenn der Browser Chrome ist. In Wirklichkeit könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder es könnte eine spätere Version von Chrome sein, die es entfernt.
3. Am wichtigsten ist, dass davon ausgegangen wird, dass keine anderen Browser das Feature unterstützen, obwohl es jederzeit zu einem anderen Browser hinzugefügt werden könnte. Alle nicht übereinstimmenden Browser bleiben mit einem ineffizienten Fallback stecken.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode zur Browsererkennung bestehen; UA sniffing, Client-Hinweise, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header usw. Zu wissen, welcher Browser verwendet wird, ist irrelevant, wonach wir in diesem Fall tatsächlich suchen, ist die Feature-Erkennung, die unten ausführlicher beschrieben wird.

## Alternativen zum UA sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browsererkennung, die robuster und in vielen weiteren Szenarien anwendbar sind als das UA sniffing.

### Feature-Erkennung

Feature-Erkennung bedeutet, dass Sie prüfen, ob ein bestimmtes Feature dem Client zur Verfügung steht, anstatt herauszufinden, welcher Browser Ihre Seite rendert. Für Fälle, in denen ein Feature nicht unterstützt wird, verwenden Sie stattdessen einen Fallback. Das folgende Beispiel zur Feature-Erkennung prüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt. Sie können dies tun, indem Sie prüfen, ob eine `geolocation` Eigenschaft auf dem globalen [`Navigator`](/de/docs/Web/API/Navigator) Objekt verfügbar ist.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Das können Sie für viele Features tun. Zum Beispiel, Sie können bestimmen, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird usw.:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Styles können Sie auch Feature-Erkennung in CSS mit der {{cssxref("@supports")}} At-Regel durchführen, kombiniert mit dem Schlüsselwort `not`, wenn Sie auf das Fehlen eines Features prüfen möchten. Siehe [Using feature queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) für Informationen zur Verwendung davon in CSS.

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

In seltenen Fällen, in denen sich das Verhalten zwischen Browsern bei einem Feature unterscheidet, sollten Sie testen, wie Browser die API implementieren und bestimmen, wie diese verwendet wird. Um mehr zu erfahren, siehe die Dokumentation [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Erkennung von mobilen Geräten

Ein häufiger Missbrauch des UA sniffing (und von [Client-Hinweisen](#client-hinweise)) besteht darin, zu erkennen, ob der Client ein mobiles Gerät ist. In der Regel sind Menschen tatsächlich motiviert, zu erkennen, ob das Gerät des Benutzers **touch-freundlich** ist und einen kleinen Bildschirm hat, damit sie ihre Website optimieren können, indem sie beispielsweise zusätzliche Polsterung zu Schaltflächen hinzufügen.

Stattdessen sollten Sie Features mit modernen APIs ermitteln. Zum Beispiel, um Touch-Unterstützung zu überprüfen, probieren Sie die [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints) Eigenschaft in der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Anliegen, wie Layout, verwenden Sie modernes CSS wie [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) für flexible Layouts. Anstatt Inhalte auf kleineren Bildschirmen zu verstecken, passen Sie das Layout dynamisch an. [Media queries](/de/docs/Web/CSS/Guides/Media_queries) sollten die meisten Layout-Änderungen handhaben, wodurch der Bedarf an JavaScript-basierten Anpassungen reduziert wird.

Wenn Sie reibungslose Übergänge sicherstellen möchten, wenn Benutzer ihre Geräte drehen oder zwischen verschiedenen Bildschirmmodi wechseln, können Sie [Detecting device orientation](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) betrachten. Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), obwohl Sie unbedingt die Kompatibilitätsdaten überprüfen sollten, da die Unterstützung stark variiert.

### Client-Hinweise

Für auf Blink basierende Browser (Chromium, Edge, Brave, Vivaldi usw.) ist eine Alternative [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints). Bei Client-Hinweisen fordert der Server proaktiv Geräteinformationen vom Client über HTTP-Header oder über die [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client-Hinweise sind besser als UA sniffing zur Erkennung von Blink-basierten Browsern, da sie nicht so häufig gefälscht werden und kleinere, zuverlässigere Informationen liefern, die einfacher zu parsen sind. Die Funktionalität der Website basierend auf Client-Hinweisen zu ändern, ist trotzdem keine gute Idee! Wo möglich, sollten Sie stattdessen Feature-Erkennung und progressive Verbesserung verwenden [wie oben beschrieben](#warum_feature-erkennung_besser_ist_als_browsererkennung).

Zum Beispiel enthält der Server im HTTP-Mechanismus einen {{httpheader("Accept-CH")}} Header zusammen mit einer Liste von Headern, die vom Client in nachfolgenden Anfragen enthalten sein sollen. Nehmen wir an, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies fordert die folgenden Header vom Client in nachfolgenden Anfragen an:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein Boolean, der anzeigt, ob der Client ein mobiles Gerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client läuft ("Windows", "Android" usw.).
- {{httpheader("Sec-CH-UA")}}: die Marken- und bedeutende Versionsinformationen des User-Agents.

Angenommen, der Client unterstützt Client-Hinweise, können die UA-Client-Hinweise in nachfolgenden Anfragen erscheinen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hinweise zu erfahren, siehe [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints). Stellen Sie sicher, dass Sie die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) Details überprüfen, bevor Sie diese Funktion verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive enhancement")}}
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in 'Schichten', indem ein Bottom-up-Ansatz verfolgt wird, der mit einer einfacheren Schicht beginnt und die Fähigkeiten der Site in aufeinanderfolgenden Schichten verbessert, die jeweils mehr Funktionen verwenden.
- {{Glossary("Graceful_degradation", "Graceful degradation")}}
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Site unter Verwendung aller Funktionen erstellen, die Sie möchten, und sie dann anpassen, damit sie in älteren Browsern funktioniert. Dies kann schwieriger zu tun sein und weniger effektiv als progressive Verbesserung, kann aber in einigen Fällen nützlich sein.

## Ungültige Gründe für die Verwendung von Browsererkennung

Wenn Sie immer noch die Browsererkennung anstelle von Feature-Erkennung und progressive Verbesserung in Betracht ziehen, prüfen Sie, ob Sie von den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen bestimmten Fehler in einer bestimmten Browserversion zu umgehen**
  - : Sie werden wahrscheinlich nicht die erste Person sein, die darauf stößt.
    Experten oder Personen mit einer anderen Ansicht können Ihnen Hinweise geben, um den Fehler besser zu vermeiden oder zu umgehen.
    Wenn das Problem ungewöhnlich ist, lohnt es sich zu prüfen, ob dieser Fehler dem Browseranbieter über Bug-Tracking-Systeme gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)).
    Browserentwickler achten auf Fehlerberichte, und Ihrer könnte helfen, das Problem zu beheben oder zuverlässigere Umgehungslösungen zu bieten.
- **Unterschiedliches HTML je nach Browser des Besuchers bereitstellen**
  - : Dies ist normalerweise eine schlechte Idee, aber es gibt seltene Fälle, in denen das notwendig ist.
    Können Sie dies verhindern, indem Sie nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen?
    Betrachten Sie, ob tatsächlich ein Problem mit Ihrem Design besteht: Können Sie progressive Verbesserung oder flüssige Layouts nutzen, um Ihr Problem zu lösen?
    Der Aufwand, eine genaue UA-Erkennung anzuwenden, im Vergleich zur Umgestaltung Ihres HTMLs sollte ein entscheidender Faktor sein.
- **Zu versuchen herauszufinden, ob der Browser eines Besuchers ein bestimmtes Feature hat**
  - : Ihre Seite muss ein bestimmtes Feature verwenden, das einige Browser noch nicht unterstützen, und Sie möchten, dass Benutzern mit inkompatiblen Browsern eine ältere Version der Website mit weniger Funktionen angeboten wird, von denen Sie wissen, dass sie funktionieren.
    Dies ist der schlechteste Grund, UA-Erkennung zu verwenden, da alle Browser wahrscheinlich irgendwann aufholen werden.
    Außerdem ist es nicht praktisch, jeden Browser für verschiedene Features auf diese Weise zu testen.

## Extrahieren relevanter UA-String-Teile

Wenn Sie alle oben genannten Optionen geprüft haben und dennoch als letzter Ausweg den UA-String parsen müssen, gibt es in diesem Abschnitt einige Hinweise, die helfen werden. Leider gibt es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings, also sind wir zu dem schwierigen Teil gekommen.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} verwenden, zeigen eine Seite auf die gleiche Weise an: Es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktioniert. Es gibt drei aktive Haupt-Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, was darauf hindeutet, dass die Rendering-Engine `Gecko` ist und der "Gecko-Trail" der feste String `20100101` ist, was "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Das Erkennen von Rendering-Engine-Namen ist auf Websites üblich, und viele User Agents haben historisch gesehen andere Rendering-Namen hinzugefügt, um zu vermeiden, dass Websites sie aufgrund des Rendering-Engine-Namens ausschließen. Es ist daher wichtig, darauf zu achten, keine Fehlalarme auszulösen, wenn die Rendering-Engine erkannt wird, da diese Methode besonders unzuverlässig ist. Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                         |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                 |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                 |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko` String hinzu, der bei unsachgemäßer Anwendung der Erkennung ein False Positive für Gecko auslösen kann. |
| Presto   | `Opera/xyz`       | Obsolet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                |
| EdgeHTML | `Edge/xyz`        | Obsolet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink').                                               |

### Rendering-Engine-Version

Die meisten Rendering-Engines geben die Versionsnummer im `RenderingEngine/VersionNumber` Token an, mit der bemerkenswerten Ausnahme von Gecko. Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Version der Rendering-Engine `138.0` ist, was derselbe Wert ist wie die Firefox-Version:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browsername und -version

Wenn Leute sagen, dass sie "Browsererkennung" möchten, meinen sie tatsächlich oft "Rendering-Engine-Erkennung". Das bedeutet normalerweise, "Gecko" oder "WebKit" zu erkennen, im Gegensatz zu "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber` fest. Da der Name jedoch nicht die einzige Information in einem User-Agent-String in diesem Format ist, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der Name, den Sie suchen, vorhanden ist. Der Browsername ist der String `Firefox/138.0` im folgenden Beispiel, was darauf hinweist, dass der Browsername `Firefox` ist und die Softwareversion `138.0`:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome berichtet zum Beispiel über Chrome und Safari. Um Safari zu erkennen, müssen Sie nach dem Safari-String und dem Fehlen des Chrome-Strings suchen, Chromium berichtet sich oft auch als Chrome und SeaMonkey berichtet sich selbst als Firefox.

Vorsicht ist geboten, wenn reguläre Ausdrücke auf den `BrowserName`-Teil angewendet werden, da User Agents auch Strings rund um die Keyword/Wert-Syntax enthalten. Safari & Chrome enthalten beispielsweise den String `like Gecko`.

| Browsername                        | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz` \* | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz` Token und eine benutzerfreundliche im `Version/xyz` Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese Angaben unter bestimmten Umständen nicht fälschen wird. Deshalb ist die Browsererkennung anhand des User-Agent-Strings unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer vorgenommen werden (das Fälschen früherer Versionen ist weniger wahrscheinlich).

### Betriebssystem-Erkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht web-fokussierte Plattformen ausgenommen sind), aber das Format variiert. Es ist ein fester String zwischen zwei Semikolons im Kommentarteil des User Agents und diese Strings sind browser-spezifisch.

Sie geben das Betriebssystem an und oft dessen Version und Informationen zur zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs). Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, damit sollten sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwendet werden, damit Muster im Voraus bekannt sind. Betrachten Sie eine Umfrage zu Besuchern oder UA-Strings, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobilgerät, Tablet oder Desktop

Der häufigste Grund für das User-Agent-Sniffing ist die Bestimmung, auf welchem Gerätetyp der Browser läuft.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Insbesondere sollten Sie sich nicht auf unterschiedliche Standards für verschiedene Browser oder Rendering-Engines verlassen.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop läuft. Das Betriebssystem kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Handys).

Die folgende Tabelle fasst zusammen, wie gängige Browservendoren angeben, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                      | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können nach dem String `Mobi` im UA-String überall suchen. Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Version der Seite bereitstellen (die als Best Practice ohnehin Touch-Eingaben unterstützen sollte, da Desktop-Geräte möglicherweise Touchscreens haben).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
