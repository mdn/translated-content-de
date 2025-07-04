---
title: Browser-Erkennung mittels User-Agent-String (UA-Sniffing)
short-title: Browser-Erkennung mittels UA-String
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Bei jedem Anfrage an einen Server fügen Browser einen {{HTTPHeader("User-Agent")}}-{{Glossary("HTTP", "HTTP")}}-Header mit einem Wert namens {{Glossary("user_agent", "user agent")}} (UA) String hinzu. Dieser String soll den Browser, seine Versionsnummer und sein Host-Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auf diesen String auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)-Eigenschaft in JavaScript zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu analysieren (manchmal "UA-Sniffing" genannt) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern, aber dies ist sehr schwer zuverlässig zu tun und oft die Ursache für Fehler.

Dieses Dokument beschreibt häufige Fallstricke bei der Verwendung des UA-Strings zur Browser-Erkennung und die empfohlenen Alternativen. Am Ende geben wir einige Hinweise zur UA-Erkennung unter Verwendung des Strings, aber Sie sollten dies nur tun, wenn es absolut notwendig ist!

## Warum Feature-Erkennung besser ist als Browser-Erkennung

Um zu veranschaulichen, warum der Versuch, die Funktionalität der Website an jeweils einen Browser anzupassen, Komplexität und mögliche Fehler einführt, beachten Sie das folgende Beispiel. Eine Anwendung möchte eine `splitUpString()`-Funktion in JavaScript unter Verwendung von [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) nutzen:

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

Dieser Code macht mehrere Annahmen, die falsch sein könnten und den Code brechen, wenn er im falschen Browser oder einer falschen Browserversion ausgeführt wird:

1. Alle User-Agent-Strings, die das Substring `Chrome` enthalten, deuten auf einen Chrome-Browser hin.

   Eines der größten Probleme mit der Browser-Erkennung basierend auf UA-Strings ist, dass Browser und User-Agents routinemäßig vortäuschen, ein anderer Browser zu sein, oder Informationen basierend auf mehreren Browsern enthalten.

2. Die Lookbehind-Funktion ist immer verfügbar, wenn der Browser Chrome ist. In Wirklichkeit könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder eine spätere Version von Chrome, die sie entfernt.
3. Am wichtigsten ist, dass es annimmt, dass keine anderen Browser die Funktion unterstützen, obwohl sie jederzeit zu jedem anderen Browser hinzugefügt werden könnte. Alle nicht passenden Browser sind gezwungen, ein ineffizientes Fallback zu verwenden.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode der Browser-Erkennung existieren werden; UA-Sniffing, Client-Hinweise, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header und so weiter. Zu wissen, welcher Browser verwendet wird, ist irrelevant. Was wir in diesem Fall eigentlich suchen, ist die Feature-Erkennung, die unten ausführlicher beschrieben wird.

## Alternativen zum UA-Sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browser-Erkennung, die robuster sind und in weit mehr Szenarien anwendbar sind als UA-Sniffing.

### Feature-Erkennung

Feature-Erkennung bedeutet, dass Sie prüfen, ob eine bestimmte Funktion für den Client verfügbar ist, anstatt herauszufinden, welcher Browser Ihre Seite rendert. Für Fälle, in denen eine Funktion nicht unterstützt wird, verwenden Sie stattdessen ein Fallback. Das folgende Beispiel zur Feature-Erkennung prüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt. Sie können dies tun, indem Sie nach einer `geolocation`-Eigenschaft auf dem globalen [`Navigator`](/de/docs/Web/API/Navigator)-Objekt suchen.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Dies können Sie für viele Funktionen tun. Beispielsweise können Sie feststellen, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird und so weiter:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Bei Styles können Sie auch in CSS eine Feature-Erkennung mit der [`@supports`](/de/docs/Web/CSS/@supports) At-Regel durchführen, kombiniert mit dem `not`-Schlüsselwort, wenn Sie das Fehlen einer Funktion überprüfen möchten. Siehe [Using feature queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) für Informationen zur Verwendung in CSS.

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

In seltenen Fällen, in denen sich das Verhalten zwischen Browsern für eine Funktion unterscheidet, sollten Sie testen, wie Browser die API implementieren und bestimmen, wie sie basierend darauf verwendet wird. Um mehr zu lernen, lesen Sie die Dokumentation [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Erkennung mobiler Geräte

Ein häufiger Missbrauch von UA-Sniffing (und [Client-Hinweisen](#client-hinweise)) besteht darin, zu erkennen, ob der Client ein mobiles Gerät ist. In der Regel sind die Menschen tatsächlich motiviert zu erkennen, ob das Gerät des Benutzers **touch-freundlich** ist und einen kleinen Bildschirm hat, damit sie ihre Website durch Hinzufügen von zusätzlichem Abstand zu Schaltflächen optimieren können, zum Beispiel.

Stattdessen sollten Sie Funktionen mit modernen APIs erkennen. Um beispielsweise die Unterstützung von Touch zu überprüfen, versuchen Sie die Eigenschaft [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints) in der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Anliegen, wie das Layout, verwenden Sie moderne CSS wie [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und [grid](/de/docs/Web/CSS/CSS_grid_layout) für flexible Layouts. Anstatt Inhalte auf kleineren Bildschirmen zu verstecken, passen Sie das Layout dynamisch an. [Media Queries](/de/docs/Web/CSS/CSS_media_queries) sollten die meisten Layoutänderungen handhaben und den Bedarf an JavaScript-basierten Anpassungen reduzieren.

Wenn Sie sicherstellen möchten, dass Übergänge beim Drehen des Geräts oder beim Wechsel zwischen verschiedenen Bildschirmmodi reibungslos verlaufen, schauen Sie sich [Detecting device orientation](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) an. Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), obwohl Sie sicherstellen sollten, die Kompatibilitätsdaten zu überprüfen, da die Unterstützung stark variieren kann.

### Client-Hinweise

Für auf Blink basierende Browser (Chromium, Edge, Brave, Vivaldi usw.) ist eine Alternative [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints). Bei Client-Hinweisen fordert der Server proaktiv Geräteinformationen von einem Client über HTTP-Header oder über die [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client-Hinweise sind besser als UA-Sniffing, um auf Blink basierende Browser zu erkennen, da sie nicht so häufig gefälscht werden und kleinere, zuverlässigere Informationsstücke bieten, die einfacher zu analysieren sind. Es ist immer noch eine schlechte Idee, die Funktionalität der Website auf der Basis von Client-Hinweisen zu ändern! Wo möglich sollten Sie stattdessen Feature-Erkennung und progressive Verbesserung verwenden [wie oben beschrieben](#warum_feature-erkennung_besser_ist_als_browser-erkennung).

Beispielsweise beinhaltet der Server im HTTP-Mechanismus einen {{httpheader("Accept-CH")}}-Header zusammen mit einer Liste von Headers, die in nachfolgenden Anfragen durch den Client enthalten sein sollten. Angenommen, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies verlangt folgende Header vom Client in den nächsten Anfragen:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein boolscher Wert, um anzuzeigen, ob der Client ein mobiles Gerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client operiert ("Windows", "Android", usw.).
- {{httpheader("Sec-CH-UA")}}: Die Kennzeichnung des user-agent und wesentliche Versionsinformationen.

Angenommen, der Client unterstützt Client-Hinweise, können die UA-Client-Hinweise in nachfolgenden Anfragen angezeigt werden:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hinweise zu erfahren, siehe [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints). Achten Sie darauf, die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility)-Details für mehr Informationen zu überprüfen, bevor Sie diese Funktion verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive enhancement")}}
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in 'Schichten', ausgehend von einer einfacheren Schicht und dem Verbessern der Fähigkeiten der Website in aufeinanderfolgenden Schichten, wobei jeweils mehr Funktionen verwendet werden.
- {{Glossary("Graceful_degradation", "Graceful degradation")}}
  - : Dies ist ein Top-Down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und diese dann anpassen, um auf älteren Browsern zu funktionieren. Dies kann schwieriger zu tun und weniger effektiv sein als progressive Verbesserung, kann aber in einigen Fällen nützlich sein.

## Ungültige Gründe für die Verwendung von Browser-Erkennung

Wenn Sie immer noch Browser-Erkennung anstelle von Feature-Erkennung und progressiver Verbesserung erwägen, überprüfen Sie, ob Sie von den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen spezifischen Fehler in einer bestimmten Browserversion zu umgehen**
  - : Sie werden wahrscheinlich nicht die erste Person sein, die auf das Problem stößt. Experten oder Personen mit einer anderen Sichtweise können Ihnen Hinweise geben, wie Sie den Fehler besser vermeiden oder umgehen können. Wenn das Problem selten ist, lohnt es sich zu überprüfen, ob dieser Fehler beim Browserhersteller über Bug-Tracking-Systeme gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller werden auf Fehlerberichte achten und Ihr Bericht könnte helfen, eine Lösung oder zuverlässigere Workarounds für ein Problem zu finden.
- **Unterschiedliches HTML abhängig vom Browser des Besuchers ausliefern**
  - : Dies ist normalerweise eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist. Können Sie dies verhindern, indem Sie nicht-semantische {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Elemente hinzufügen? Überlegen Sie, ob tatsächlich ein Problem mit Ihrem Design besteht: Können Sie progressive Verbesserung oder flüssige Layouts verwenden, um Ihren Bedarf dafür zu beseitigen? Der Aufwand, genaue UA-Erkennung anzuwenden, im Vergleich dazu, Ihr HTML umzuarbeiten, sollte ein entscheidender Faktor sein.
- **Versuch, herauszufinden, ob der Browser eines Besuchers eine bestimmte Funktion hat**
  - : Ihre Website muss eine bestimmte Funktion verwenden, die einige Browser noch nicht unterstützen, und Sie wollen, dass Nutzern mit inkompatiblen Browsern eine ältere Website mit weniger Funktionen angezeigt wird, die Sie wissen, funktionieren wird. Dies ist der schlechteste Grund, UA-Erkennung zu verwenden, da alle Browser wahrscheinlich irgendwann aufholen werden. Außerdem ist es unpraktisch, jeden Browser auf unterschiedliche Funktionen in dieser Weise zu testen.

## Relevante UA-String-Teile extrahieren

Wenn Sie alle oben genannten Optionen untersucht haben und dennoch den UA-String als letzte Möglichkeit analysieren müssen, gibt es einige Hinweise in diesem Abschnitt, die helfen werden. Leider gibt es keine Einheitlichkeit bei den verschiedenen Teilen des User-Agent-Strings, sodass wir nun zum kniffligen Teil kommen.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} nutzen, werden eine Seite auf die gleiche Weise darstellen: Es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktionieren wird. Es gibt drei aktive Haupt-Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, was anzeigt, dass die Rendering-Engine `Gecko` ist, und das "gecko-Trail" ist der feste String `20100101`, was "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Das Erkennen von Rendering-Engine-Namen ist bei Websites üblich, und historisch fügten viele User-Agents andere Rending-Namen hinzu, um zu vermeiden, dass Websites sie basierend auf dem Rendering-Engine-Namen allein ausschließen. Daher ist es wichtig, darauf zu achten, keine falschen Positiven bei der Erkennung der Rendering-Engine auszulösen, da diese Methode besonders unzuverlässig ist. Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                                   |
| -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                           |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                           |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko` String hinzu, der bei nicht sorgfältiger Anwendung der Erkennung falsch positive Treffer für Gecko auslösen kann. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink')                                                          |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink').                                                        |

### Rendering-Engine-Version

Die meisten Rendering-Engines setzen die Versionsnummer im `RenderingEngine/VersionNumber` Token, mit der bemerkenswerten Ausnahme von Gecko. Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Versionsnummer der Rendering-Engine `138.0` ist, was der gleiche Wert wie die Firefox-Version ist:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browser-Name und Version

Wenn Leute sagen, dass sie "Browser-Erkennung" wollen, meinen sie oft eigentlich "Rendering-Engine-Erkennung". Das bedeutet normalerweise, "Gecko" oder "WebKit" zu erkennen, im Gegensatz zu "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber`. Da der Name aber nicht die einzige Information in einem User-Agent-String in diesem Format ist, können Sie den Namen des Browsers nicht herausfinden, sondern nur überprüfen, ob der gesuchte Name vorhanden ist. Der Browsername ist der String `Firefox/138.0` im folgenden Beispiel, was darauf hinweist, dass der Browsername `Firefox` ist, und die Softwareversion `138.0`:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome meldet zum Beispiel sowohl Chrome als auch Safari. Um Safari zu erkennen, müssen Sie nach dem Safari-String suchen und das Fehlen des Chrome-Strings sicherstellen, Chromium meldet sich oft auch als Chrome und SeaMonkey meldet sich als Firefox.

Seien Sie vorsichtig bei der Verwendung regulärer Ausdrücke für den `BrowserName`-Teil, da User-Agents auch Strings um die Keyword/Value-Syntax herum enthalten. Safari & Chrome enthalten zum Beispiel den String `like Gecko`.

| Browser-Name                       | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` or `Edg.*/xyz`    |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz` \* | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz` Token und eine benutzerfreundliche im `Version/xyz` Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese in bestimmten Fällen nicht fälscht. Deshalb ist die Browser-Erkennung mit dem User-Agent-String unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer durchgeführt werden (die Fälschung vergangener Versionen ist weniger wahrscheinlich).

### Betriebssystemerkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht webfokussierte Plattformen), aber das Format variiert. Es ist ein fester String zwischen zwei Semikolons, im Kommentarteil des User-Agent und diese Strings sind spezifisch für jeden Browser.

Sie geben das Betriebssystem an und oft seine Version und Informationen auf der zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM-CPU-Architektur für Windows-PCs). Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, daher sollten Sie sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden, sodass Muster im Voraus bekannt sind. Ziehen Sie eine Besucher- oder UA-String-Umfrage in Betracht, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobilgerät, Tablet oder Desktop

Der häufigste Grund für das User-Agent-Sniffing ist zu bestimmen, auf welchem Gerätetyp der Browser ausgeführt wird.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Insbesondere sollten Sie sich nicht auf unterschiedliche Standards für unterschiedliche Browser oder Rendering-Engines verlassen.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop läuft. Das Betriebssystem kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie übliche Browser-Anbieter anzeigen, dass ihre Browser auf einem Mobilgerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` innerhalb des Kommentars.          | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können nach dem String `Mobi` irgendwo im UA-String suchen. Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Site bereitstellen (die auch, als Best Practice, Touch-Eingabe unterstützen sollte, da Desktop-Geräte Touchscreens haben können).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
