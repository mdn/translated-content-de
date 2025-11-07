---
title: Browsererkennung mithilfe des User-Agent-Strings (UA-Sniffing)
short-title: Browsererkennung mithilfe des UA-Strings
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Zusammen mit jeder Anfrage an einen Server senden Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}}-Header mit einem Wert, der als {{Glossary("user_agent", "User Agent")}} (UA) bezeichnet wird. Dieser String soll den Browser, seine Versionsnummer und das Host-Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auch auf diesen String über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)-Eigenschaft in JavaScript zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu parsen (manchmal als "UA-Sniffing" bezeichnet) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern. Dies ist jedoch sehr schwer zuverlässig zu tun und oft die Ursache für Fehler.

Dieses Dokument beschreibt gängige Fallstricke beim Verwenden des UA-Strings zur Browsererkennung und die empfohlenen Alternativen. Am Ende geben wir einige Hinweise zur UA-Erkennung mithilfe des Strings, aber Sie sollten dies nur tun, wenn es absolut notwendig ist!

## Warum Funktionsdetektion besser ist als Browsererkennung

Um zu verdeutlichen, warum der Versuch, die Funktionalität der Website je nach Browser anzupassen, Komplexität und mögliche Fehler einführt, betrachten Sie folgendes Beispiel. Eine Anwendung möchte eine `splitUpString()`-Funktion in JavaScript unter Verwendung einer [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) verwenden:

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

Dieser Code macht mehrere Annahmen, die falsch sein können und den Code brechen, wenn er im falschen Browser oder einer falschen Browserversion ausgeführt wird:

1. Alle User-Agent-Strings, die den Substring `Chrome` enthalten, weisen auf einen Chrome-Browser hin.

   Eines der größten Probleme mit der Browsererkennung basierend auf UA-Strings ist, dass Browser und User Agents routinemäßig vorgeben, ein anderer Browser zu sein oder Informationen basierend auf mehreren Browsern enthalten.

2. Die Lookbehind-Funktion ist immer verfügbar, wenn der Browser Chrome ist. In Wirklichkeit könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder es könnte eine spätere Version von Chrome sein, die sie entfernt.
3. Am wichtigsten ist, dass vorausgesetzt wird, dass keine anderen Browser die Funktion unterstützen, obwohl sie jederzeit zu anderen Browsern hinzugefügt werden könnte. Alle nicht übereinstimmenden Browser bleiben bei einem ineffizienten Fallback hängen.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode der Browsererkennung bestehen: UA-Sniffing, Client-Hints, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header usw. Zu wissen, welcher Browser verwendet wird, ist irrelevant, was wir in diesem Fall tatsächlich suchen, ist Funktionsdetektion, die weiter unten näher beschrieben wird.

## Alternativen zum UA-Sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browsererkennung, die robuster sind und in vielen Szenarien anwendbarer als UA-Sniffing.

### Funktionsdetektion

Funktionsdetektion bedeutet, zu überprüfen, ob eine bestimmte Funktion für den Client verfügbar ist, anstatt herauszufinden, welcher Browser Ihre Seite rendert. Für Fälle, in denen eine Funktion nicht unterstützt wird, verwenden Sie stattdessen einen Fallback. Das folgende Beispiel für Funktionsdetektion überprüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt. Sie können dies tun, indem Sie nach einer `geolocation`-Eigenschaft auf dem globalen [`Navigator`](/de/docs/Web/API/Navigator)-Objekt suchen.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Sie können dies für viele Funktionen tun. Zum Beispiel können Sie feststellen, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird, und so weiter:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Styles können Sie auch Funktionsdetektion in CSS mit der [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports)-At-Regel durchführen, kombiniert mit dem Schlüsselwort `not`, wenn Sie das Fehlen einer Funktion überprüfen möchten. Weitere Informationen zur Verwendung in CSS finden Sie unter [Using feature queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

In seltenen Fällen, in denen sich das Verhalten bei einer Funktion zwischen Browsern unterscheidet, sollten Sie testen, wie Browser die API implementieren, und bestimmen, wie Sie sie basierend darauf verwenden können. Um mehr zu erfahren, lesen Sie die Dokumentation zu [Implementieren der Funktionsdetektion](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Erkennung mobiler Geräte

Ein häufiger Missbrauch des UA-Sniffing (und [Client-Hints](#client-hints)) besteht darin, zu erkennen, ob der Client ein mobiles Gerät ist. Normalerweise wollen Menschen eigentlich herausfinden, ob das Gerät des Benutzers **touchfreundlich** ist und einen kleinen Bildschirm hat, damit sie ihre Website optimieren können, indem sie zum Beispiel zusätzliche Polsterung zu Buttons hinzufügen.

Stattdessen sollten Sie Funktionen mit modernen APIs erkennen. Um beispielsweise auf Unterstützung für Touch zu überprüfen, verwenden Sie die [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft in der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Anliegen, wie das Layout, verwenden Sie moderne CSS-Techniken wie [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und [grid](/de/docs/Web/CSS/CSS_grid_layout) für flexible Layouts. Anstatt den Inhalt auf kleineren Bildschirmen zu verstecken, passen Sie das Layout dynamisch an. [Media Queries](/de/docs/Web/CSS/CSS_media_queries) sollten die meisten Layoutänderungen handhaben und somit den Bedarf an JavaScript-basierten Anpassungen reduzieren.

Wenn Sie einen nahtlosen Übergang sicherstellen möchten, wenn Benutzer ihre Geräte drehen oder zwischen verschiedenen Bildschirmmodi wechseln, können Sie auf [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) achten. Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), obwohl Sie sicherstellen sollten, dass Sie die Kompatibilitätsdaten überprüfen, da die Unterstützung stark variieren kann.

### Client-Hints

Für Blink-basierte Browser (Chromium, Edge, Brave, Vivaldi usw.) ist eine Alternative [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints). In Client-Hints fordert der Server proaktiv Geräteinformationen von einem Client über HTTP-Header oder über die [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client-Hints sind besser als UA-Sniffing bei der Erkennung von Blink-basierten Browsern, da sie nicht so häufig gefälscht werden und kleinere, zuverlässigere Informationen liefern, die leichter zu parsen sind. Änderungen der Website-Funktionalität basierend auf Client-Hints sind jedoch immer noch keine gute Idee! Wo möglich, sollten Sie stattdessen Funktionsdetektion und progressive Verbesserung verwenden [wie oben beschrieben](#warum_funktionsdetektion_besser_ist_als_browsererkennung).

Beispielsweise enthält im HTTP-Mechanismus der Server einen {{httpheader("Accept-CH")}}-Header zusammen mit einer Liste von Headern, die der Client bei nachfolgenden Anfragen einfügen soll. Angenommen, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies fordert die folgenden Header vom Client bei nachfolgenden Anfragen an:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein Boolean, um anzuzeigen, ob der Client ein mobiles Gerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client arbeitet ("Windows", "Android" usw.).
- {{httpheader("Sec-CH-UA")}}: die Kennzeichnung und signifikante Versionsinformationen des User-Agents.

Angenommen, der Client unterstützt Client-Hints, können die UA-Client-Hints in nachfolgenden Anfragen erscheinen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hints zu erfahren, siehe [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints). Stellen Sie sicher, dass Sie die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) überprüfen, bevor Sie dieses Feature verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive enhancement")}}
  - : Dieser Designansatz umfasst die Entwicklung Ihrer Website in 'Schichten', beginnend mit einer einfacheren Schicht und die Fähigkeiten der Website in aufeinander folgenden Schichten zu erweitern, wobei jede mehr Features verwendet.
- {{Glossary("Graceful_degradation", "Graceful degradation")}}
  - : Dies ist ein Ansatz von oben nach unten, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und diese dann anpassen, um auf älteren Browsern zu funktionieren. Dies kann schwieriger sein als progressive enhancement und weniger effektiv, aber in einigen Fällen nützlich.

## Ungültige Gründe für die Browsererkennung

Wenn Sie immer noch Browsererkennung anstelle von Funktionsdetektion und progressive enhancement in Betracht ziehen, prüfen Sie, ob Sie aus den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen bestimmten Fehler in einer bestimmten Browserversion zu umgehen**
  - : Sie werden wahrscheinlich nicht die erste Person sein, die darauf stößt.
    Experten oder Personen mit einem anderen Blickwinkel können Ihnen Hinweise geben, um den Fehler besser zu vermeiden oder zu umgehen.
    Wenn das Problem ungewöhnlich ist, lohnt es sich zu prüfen, ob dieser Fehler dem Browser-Hersteller über Fehlerticketsysteme ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)) gemeldet wurde.
    Browser-Hersteller achten auf Bugreports und Ihre Meldung kann helfen, ein Problem zu beheben oder verlässlichere Workarounds anzubieten.
- **Servieren von unterschiedlichen HTML-Inhalten abhängig vom Browser des Besuchers**
  - : Dies ist in der Regel eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist.
    Können Sie dies verhindern, indem Sie nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen?
    Überlegen Sie, ob es tatsächlich ein Problem mit Ihrem Design gibt: Können Sie progressive enhancement oder flüssige Layouts verwenden, um Ihre Notwendigkeit zu beseitigen?
    Der Aufwand für die genaue UA-Erkennung im Vergleich zur Überarbeitung Ihres HTML-Codes sollte ein ausschlaggebender Faktor sein.
- **Versuch, herauszufinden, ob der Browser eines Besuchers eine bestimmte Funktion hat**
  - : Ihre Seite muss eine bestimmte Funktion nutzen, die einige Browser noch nicht unterstützen, und Sie möchten Benutzern mit inkompatiblen Browsern eine ältere Website mit weniger Funktionen bereitstellen, die sicher funktionieren.
    Dies ist der schlechteste Grund für die Verwendung von UA-Erkennung, da alle Browser wahrscheinlich irgendwann aufholen werden.
    Darüber hinaus ist es unpraktisch, jeden Browser auf verschiedene Funktionen zu testen.

## Extrahieren relevanter UA-String-Teile

Wenn Sie alle oben genannten Optionen überprüft haben und dennoch den UA-String als letzte Möglichkeit parsen müssen, finden Sie in diesem Abschnitt einige Hinweise, die Ihnen dabei helfen. Leider gibt es keine einheitliche Struktur in den verschiedenen Teilen des User-Agent-Strings, daher sind wir jetzt im schwierigen Abschnitt angekommen.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} teilen, werden eine Seite auf die gleiche Weise anzeigen: Es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktioniert. Es gibt drei aktive große Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, was darauf hinweist, dass die Rendering-Engine `Gecko` ist und der "gecko-Trail" ist der feste String `20100101`, was "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Das Erkennen von Rendering-Engine-Namen ist auf Websites üblich, und viele User Agents fügen in der Vergangenheit andere Rendering-Namen hinzu, um zu vermeiden, dass Websites sie allein aufgrund des Rendering-Engine-Namens ausschließen.
Daher ist es wichtig, darauf zu achten, keine Fehlalarme bei der Erkennung der Rendering-Engine auszulösen, da diese Methode besonders unzuverlässig ist.
Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                                     |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                             |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                             |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko`-String hinzu, der ein false positive für Gecko auslösen kann, falls die Erkennung nicht sorgfältig angewendet wird. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                           |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink').                                                          |

### Rendering-Engine-Version

Die meisten Rendering-Engines geben die Versionsnummer im `RenderingEngine/VersionNumber`-Token an, mit der bemerkenswerten Ausnahme von Gecko.
Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Versionsnummer der Rendering-Engine `138.0` ist, was der Firefox-Version entspricht:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browsername und -version

Wenn Menschen sagen, sie möchten "Browsererkennung", meinen sie tatsächlich oft "Rendering-Engine-Erkennung".
Das bedeutet normalerweise, "Gecko" oder "WebKit" zu erkennen anstelle von "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber`.
Da der Name jedoch nicht die einzige Information in einem User-Agent-String in diesem Format ist, können Sie den Namen des Browsers nicht herausfinden, sondern nur prüfen, ob der gesuchte Name vorhanden ist.
Der Browsername ist der String `Firefox/138.0` im folgenden Beispiel, was darauf hinweist, dass der Browsername `Firefox` und die Software-Version `138.0` ist:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome beispielsweise meldet sowohl Chrome als auch Safari.
Um Safari zu erkennen, müssen Sie nach dem Safari-String und dem Fehlen des Chrome-Strings suchen, Chromium meldet sich oft auch als Chrome und SeaMonkey als Firefox.

Seien Sie vorsichtig, wenn Sie reguläre Ausdrücke auf den `BrowserName`-Teil anwenden, da User Agents auch Strings um das Keyword/Wert-Syntax herum enthalten.
Safari & Chrome enthalten beispielsweise den String `like Gecko`.

| Browsername                | Muss enthalten  | Darf nicht enthalten             |
| -------------------------- | --------------- | -------------------------------- |
| Firefox                    | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                  | `Seamonkey/xyz` |                                  |
| Chrome                     | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                   | `Chromium/xyz`  |                                  |
| Safari                     | `Safari/xyz` \* | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basiert)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basiert) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz`-Token und eine benutzerfreundliche in einem `Version/xyz`-Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese in bestimmten Fällen nicht fälscht.
Deshalb ist die Browsererkennung mithilfe des User-Agent-Strings unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer durchgeführt werden (das Spoofing von älteren Versionen ist weniger wahrscheinlich).

### Betriebssystemerkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht auf webzentrierten Plattformen), aber das Format variiert.
Es ist ein fester String zwischen zwei Semikolons im Kommentar-Teil des User-Agents, und diese Strings sind spezifisch für jeden Browser.

Sie geben das OS an und häufig dessen Version sowie Informationen über die zugrunde liegende Hardware (32 oder 64 Bits, Intel/PPC für Mac oder x86/ARM-CPU-Architektur für Windows-PCs).
Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, daher sollten Sie sie nur in Verbindung mit der Erkennung von bereits veröffentlichten Browsern verwenden, damit Muster im Voraus bekannt sind.
Betrachten Sie eine Besucher- oder UA-String-Umfrage, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobil, Tablet oder Desktop

Der häufigste Grund für die Durchführung von User-Agent-Sniffing ist die Bestimmung, auf welchem Gerätetyp der Browser läuft.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft.
  Insbesondere sollten Sie sich nicht auf unterschiedliche Defaults für verschiedene Browser oder Rendering-Engines verlassen.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop läuft.
  Das OS kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Handys).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter anzeigen, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                              | Regel                                                    | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                     | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari`-Token außerhalb des Kommentars.          | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.          | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/`-Token außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können im UA-String nach dem String `Mobi` suchen.
Wenn das Gerät groß genug ist, um nicht mit `Mobi` gekennzeichnet zu sein, sollten Sie Ihre Desktop-Website bereitstellen (die, als gute Praxis, Touch-Eingaben unterstützen sollte, da Desktop-Geräte Touchscreens haben können).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementieren der Funktionsdetektion](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Wechsel zu User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
