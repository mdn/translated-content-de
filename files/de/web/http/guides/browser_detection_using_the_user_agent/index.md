---
title: Browser-Erkennung mittels User-Agent-String (UA-Sniffing)
short-title: Browser-Erkennung mittels UA-String
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{HTTPSidebar}}

Bei jeder Serveranfrage fügen Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}} Header mit einem Wert, dem sogenannten {{Glossary("user_agent", "user agent")}} (UA) String, hinzu. Dieser String soll den Browser, seine Versionsnummer und sein Host-Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auf diesen String auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) Eigenschaft in JavaScript zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu parsen (oft als "UA-Sniffing" bezeichnet) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern, aber dies ist sehr schwer zuverlässig durchzuführen und führt oft zu Fehlern.

Dieses Dokument beschreibt häufige Fallstricke bei der Verwendung des UA-Strings zur Browser-Erkennung und die empfohlenen Alternativen. Am Ende geben wir einige Hinweise zur UA-Erkennung unter Verwendung des Strings, aber Sie sollten dies nur tun, wenn es unbedingt notwendig ist!

## Warum Feature-Erkennung besser ist als Browser-Erkennung

Um zu veranschaulichen, warum der Versuch, die Funktionalität der Website je nach Browser anzupassen, Komplexität und mögliche Fehler einführt, ziehen Sie das folgende Beispiel in Betracht. Eine Anwendung möchte eine `splitUpString()` Funktion in JavaScript unter Verwendung der [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) nutzen:

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

Dieser Code trifft mehrere Annahmen, die falsch sein können, und den Code brechen, wenn er auf dem falschen Browser oder einer falschen Browserversion ausgeführt wird:

1. Alle User-Agent-Strings, die das Teilstück `Chrome` enthalten, weisen auf einen Chrome-Browser hin.

   Eines der größten Probleme bei der Browser-Erkennung basierend auf UA-Strings ist, dass Browser und User Agents routinemäßig vorgeben, ein anderer Browser zu sein, oder Informationen basierend auf mehreren Browsern einschließen.

2. Die Lookbehind-Funktion ist immer verfügbar, wenn der Browser Chrome ist. In Wirklichkeit könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder eine spätere Version von Chrome, die sie entfernt.
3. Am wichtigsten ist, dass angenommen wird, keine anderen Browser unterstützen die Funktion, obwohl sie jederzeit in jeden anderen Browser hinzugefügt werden könnte. Alle nicht übereinstimmenden Browser werden eine ineffiziente Alternative verwenden.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode zur Browser-Erkennung bestehen; UA-Sniffing, Client-Hints, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header, und so weiter. Zu wissen, welcher Browser verwendet wird, ist irrelevant. Was wir in diesem Fall tatsächlich suchen, ist die Funktionserkennung, die im Folgenden ausführlicher beschrieben wird.

## Alternativen zum UA-Sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browser-Erkennung, die robuster sind und in vielen Szenarien anwendbar sind als das UA-Sniffing.

### Feature-Erkennung

Feature-Erkennung bedeutet, dass Sie prüfen, ob eine bestimmte Funktion dem Client zur Verfügung steht, anstatt herauszufinden, welcher Browser Ihre Seite rendert. Für Fälle, in denen eine Funktion nicht unterstützt wird, verwenden Sie stattdessen eine Alternative. Das folgende Beispiel zur Feature-Erkennung prüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt. Sie können dies tun, indem Sie nach einer `geolocation` Eigenschaft auf dem globalen [`Navigator`](/de/docs/Web/API/Navigator) Objekt suchen.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Sie können dies auch für viele andere Funktionen tun. Zum Beispiel können Sie ermitteln, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird, und so weiter:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Stile können Sie auch Feature-Erkennung in CSS mit der [`@supports`](/de/docs/Web/CSS/@supports) At-Regel durchführen, kombiniert mit dem `not` Schlüsselwort, wenn Sie das Fehlen einer Funktion überprüfen möchten. Siehe [Using feature queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) für weitere Informationen zur Verwendung in CSS.

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

In seltenen Fällen, in denen sich das Verhalten für eine Funktion zwischen den Browsern unterscheidet, sollten Sie testen, wie Browser die API implementieren und bestimmen, wie sie basierend darauf zu verwenden ist. Um mehr zu erfahren, sehen Sie sich die Dokumentation zum [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) an.

#### Erkennung von Mobilgeräten

Ein häufiger Missbrauch von UA-Sniffing (und [Client-Hints](#client-hints)) besteht darin, zu erkennen, ob der Client ein mobiles Gerät ist. Üblicherweise möchten Leute eigentlich herausfinden, ob das Gerät des Benutzers **touch-freundlich** ist und einen kleinen Bildschirm hat, damit sie ihre Website durch Hinzufügen von zusätzlichem Abstand zu Schaltflächen optimieren können.

Stattdessen sollten Sie Funktionen mit modernen APIs erkennen. Um zum Beispiel die Unterstützung von Berührungen zu überprüfen, probieren Sie die [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints) Eigenschaft in der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Bedenken, wie Layout, verwenden Sie modernes CSS wie [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und [grid](/de/docs/Web/CSS/CSS_grid_layout) für flexible Layouts. Anstatt Inhalte auf kleineren Bildschirmen zu verstecken, passen Sie das Layout dynamisch an. [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) sollten die meisten Layoutänderungen abwickeln und den Bedarf für JavaScript-basierte Anpassungen verringern.

Um reibungslose Übergänge sicherzustellen, wenn Benutzer ihre Geräte drehen oder zwischen verschiedenen Bildschirmmodi wechseln, können Sie [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) nachsehen. Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), obwohl Sie sicherstellen sollten, die Kompatibilitätsdaten zu prüfen, da die Unterstützung stark variieren kann.

### Client-Hints

Für Blink-basierte Browser (Chromium, Edge, Brave, Vivaldi, etc.) ist eine Alternative [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints). Bei Client-Hints fordert der Server proaktiv Geräteinformationen vom Client über HTTP-Header oder eine [JavaScript-API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client-Hints sind besser als UA-Sniffing für die Erkennung von Blink-basierten Browsern, da sie nicht so häufig gefälscht werden und kleinere, zuverlässigere Informationen liefern, die einfacher zu parsen sind. Die Änderung der Website-Funktionalität basierend auf Client-Hints ist immer noch eine schlechte Idee! Wo möglich, sollten Sie stattdessen Feature-Erkennung und progressive Verbesserung verwenden [wie oben beschrieben](#warum_feature-erkennung_besser_ist_als_browser-erkennung).

Im HTTP-Mechanismus enthält der Server beispielsweise einen {{httpheader("Accept-CH")}} Header zusammen mit einer Liste von Headern, die der Client bei nachfolgenden Anfragen einfügen soll. Nehmen wir an, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies fordert in den nachfolgenden Anfragen die folgenden Header vom Client an:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein Boolean, der angibt, ob der Client ein mobiles Gerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client läuft ("Windows", "Android", usw.).
- {{httpheader("Sec-CH-UA")}}: die Marke des User-Agents und signifikante Versionsinformationen.

Vorausgesetzt, der Client unterstützt Client-Hints, können die UA-Client-Hints in nachfolgenden Anfragen erscheinen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hints zu erfahren, siehe [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints). Stellen Sie sicher, die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) Details zu prüfen, bevor Sie diese Funktion verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive enhancement")}}
  - : Diese Designtechnik beinhaltet das Entwickeln Ihrer Website in 'Schichten', mit einem Bottom-up-Ansatz, beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinanderfolgenden Schichten, jede mit mehr Funktionen.
- {{Glossary("Graceful_degradation", "Graceful degradation")}}
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und dann optimieren, damit sie auf älteren Browsern funktioniert. Dies kann schwieriger sein und weniger effektiv als progressive Enhancement, kann aber in einigen Fällen nützlich sein.

## Ungültige Gründe zur Browser-Erkennung

Wenn Sie immer noch über Browser-Erkennung anstelle von Feature-Erkennung und progressiver Verbesserung nachdenken, überprüfen Sie, ob Sie von den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen bestimmten Fehler in einer bestimmten Browserversion zu umgehen**
  - : Sie sind wahrscheinlich nicht die erste Person, die darauf stößt. Experten oder Personen mit einem anderen Standpunkt können Ihnen Hinweise geben, wie Sie den Fehler besser vermeiden oder umgehen können. Wenn das Problem ungewöhnlich ist, ist es es wert, zu überprüfen, ob dieser Fehler dem Browser-Anbieter über Fehlerverfolgungssysteme ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)) gemeldet wurde. Browser-Hersteller achten auf Fehlerberichte, und Ihrer könnte helfen, ein Problem zu beheben oder verlässlichere Umgehungen bereitzustellen.
- **Unterschiedliches HTML je nach Browser des Besuchers ausliefern**
  - : Dies ist in der Regel eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist. Können Sie es verhindern, indem Sie nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen? Überlegen Sie, ob es tatsächlich ein Problem mit Ihrem Design gibt: Können Sie progressive Enhancement oder flüssige Layouts verwenden, um Ihre Notwendigkeit dazu zu entfernen? Der Aufwand, eine genaue UA-Erkennung anzuwenden, im Vergleich zur Überarbeitung Ihres HTML sollte entscheidend sein.
- **Versuchen zu ermitteln, ob ein Browser des Besuchers eine bestimmte Funktion hat**
  - : Ihre Seite muss eine bestimmte Funktion nutzen, die einige Browser noch nicht unterstützen, und Sie möchten Nutzern mit inkompatiblen Browsern eine ältere Website mit weniger Funktionen, von denen Sie wissen, dass sie funktionieren, bereitstellen. Dies ist der schlechteste Grund für die Verwendung von UA-Erkennung, da alle Browser wahrscheinlich irgendwann aufholen werden. Außerdem ist es nicht praktisch, jeden Browser auf unterschiedliche Funktionen auf diese Weise zu testen.

## Extrahieren relevanter UA-String-Teile

Wenn Sie alle oben genannten Optionen geprüft haben und immer noch den UA-String als letzten Ausweg parsen müssen, gibt es in diesem Abschnitt einige Hinweise, die helfen werden. Leider gibt es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings, sodass wir zu dem kniffligen Teil kommen.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} teilen, werden eine Seite auf dieselbe Weise anzeigen: Es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktioniert. Es gibt drei aktive große Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, was darauf hinweist, dass die Rendering-Engine `Gecko` ist und das "gecko-Trail" der festgelegte String `20100101` ist, der "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Das Erkennen von Rendering-Engine-Namen ist auf Websites üblich, und viele User Agents haben historisch gesehen andere Rendering-Namen hinzugefügt, um zu vermeiden, dass Websites sie aufgrund des Rendering-Engine-Namens allein ausschließen. Es ist daher wichtig, darauf zu achten, keine False-Positives auszulösen, wenn die Rendering-Engine erkannt wird, da diese Methode besonders unzuverlässig ist. Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                                             |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                     |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                     |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko` String hinzu, der möglicherweise ein False-Positive für Gecko auslöst, wenn die Erkennung nicht sorgfältig angewendet wird. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird nicht mehr in Opera-Browser-Builds >= Version 15 verwendet (siehe 'Blink')                                                                    |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird nicht mehr in Edge-Browser-Builds >= Version 79 verwendet (siehe 'Blink').                                                                  |

### Version der Rendering-Engine

Die meisten Rendering-Engines setzen die Versionsnummer im `RenderingEngine/VersionNumber` Token, mit der bemerkenswerten Ausnahme von Gecko. Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Rendering-Engine-Versionsnummer `138.0` ist, was der gleichen Versionsnummer von Firefox entspricht:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browsername und -version

Wenn Leute von "Browser-Erkennung" sprechen, meinen sie eigentlich oft "Rendering-Engine-Erkennung". Das bedeutet in der Regel, "Gecko" oder "WebKit" zu erkennen, anstatt "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber`. Aber da der Name nicht die einzige Information im User-Agent-String in diesem Format ist, können Sie den Namen des Browsers nicht entdecken, sondern nur prüfen, ob der Name, den Sie suchen, vorhanden ist. Der Browsername ist der String `Firefox/138.0` im folgenden Beispiel, was darauf hinweist, dass der Browsername `Firefox` ist und die Softwareversion `138.0` ist:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome zum Beispiel meldet sowohl Chrome als auch Safari. Um Safari zu erkennen, müssen Sie den Safari-String und das Fehlen des Chrome-Strings überprüfen, Chromium meldet sich oft auch als Chrome und SeaMonkey meldet sich als Firefox.

Seien Sie vorsichtig, wenn Sie reguläre Ausdrücke auf dem `BrowserName`-Teil verwenden, da User Agents auch Strings um das Keyword/Value-Syntax enthalten. Safari und Chrome enthalten zum Beispiel den String `like Gecko`.

| Browsername                        | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz` \* | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern aus: eine technische im `Safari/xyz` Token und eine benutzerfreundliche in einem `Version/xyz` Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese in bestimmten Fällen nicht fälscht. Deshalb ist die Browser-Erkennung unter Verwendung des User-Agent-Strings unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer durchgeführt werden (das Fälschen vergangener Versionen ist weniger wahrscheinlich).

### Betriebssystem-Erkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht auf Web-fokussierten Plattformen), aber das Format variiert. Es ist ein fester String zwischen zwei Semikolons, im Kommentarteil des User Agents, und diese Strings sind spezifisch für jeden Browser.

Sie geben das Betriebssystem an und oft seine Version und Informationen zur zugrunde liegenden Hardware (32 oder 64 Bits, Intel/PPC für Mac oder x86/ARM-CPU-Architektur für Windows-PCs). Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In jedem Fall können sich diese Strings ändern, daher sollten Sie sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden, sodass Muster im Voraus bekannt sind. Ziehen Sie eine Nutzer- oder User-Agent-String-Umfrage in Betracht, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobil, Tablet oder Desktop

Der häufigste Grund für das User-Agent-Sniffing ist die Bestimmung, auf welchem Gerätetyp der Browser läuft.

- Gehen Sie niemals davon aus, dass eine Rendering-Engine nur auf einem Gerätetyp läuft. Insbesondere sollten Sie sich nicht auf unterschiedliche Standards für verschiedene Browser oder Rendering-Engines verlassen.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser mobil, auf einem Tablet oder auf einem Desktop läuft. Das Betriebssystem kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Handys).

Die folgende Tabelle fasst die Art und Weise zusammen, wie gängige Browser-Anbieter anzeigen, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                      | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können nach dem String `Mobi` irgendwo im UA-String suchen. Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Seite ausliefern (was, als Best Practice, sowieso Touch-Eingabe unterstützen sollte, da Desktop-Geräte möglicherweise Touchscreens haben).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
