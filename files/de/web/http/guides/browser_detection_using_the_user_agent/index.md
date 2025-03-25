---
title: Browser-Erkennung mittels User-Agent-String (UA-Sniffing)
short-title: Browser-Erkennung mit dem UA-String
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{HTTPSidebar}}

Bei jeder Anfrage an einen Server senden Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}}-Header mit einem Wert, der als {{Glossary("user_agent", "User Agent")}} (UA) String bezeichnet wird.
Dieser String soll den Browser, seine Versionsnummer und das Host-Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auf diesen String auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)-Eigenschaft in JavaScript zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu analysieren (manchmal als "UA-Sniffing" bezeichnet) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern. Dies ist jedoch sehr schwer zuverlässig zu tun und führt oft zu Fehlern.

Dieses Dokument beschreibt häufige Fallstricke bei der Verwendung des UA-Strings zur Browser-Erkennung und die empfohlenen Alternativen.
Am Ende geben wir einige Hinweise zur UA-Erkennung mittels des Strings, aber Sie sollten dies nur tun, wenn es absolut notwendig ist!

## Warum Feature-Erkennung besser ist als Browser-Erkennung

Um zu veranschaulichen, warum das Anpassen der Seitenfunktionen pro Browser Komplexität und mögliche Fehler einführt, betrachten Sie das folgende Beispiel.
Eine Anwendung möchte eine `splitUpString()`-Funktion in JavaScript mit einer [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) verwenden:

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

Dieser Code macht mehrere Annahmen, die falsch sein können und den Code brechen, wenn er im falschen Browser oder in der falschen Browserversion ausgeführt wird:

1. Alle User-Agent-Strings, die das Substring `Chrome` enthalten, zeigen auf einen Chrome-Browser hin.

   Eines der größten Probleme bei der Browser-Erkennung basierend auf UA-Strings ist, dass Browser und User-Agents routinemäßig so tun, als ob sie ein anderer Browser wären, oder Informationen enthalten, die auf mehrere Browser basieren.

2. Das Lookbehind-Feature ist immer verfügbar, wenn der Browser Chrome ist.
   Tatsächlich könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder es könnte eine spätere Version von Chrome sein, die es entfernt.
3. Am wichtigsten ist, dass davon ausgegangen wird, dass keine anderen Browser das Feature unterstützen, obwohl es jederzeit zu einem anderen Browser hinzugefügt werden könnte.
   Alle nicht übereinstimmenden Browser sind auf ein ineffizientes Fallback beschränkt.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode der Browser-Erkennung bestehen werden; UA-Sniffing, Client-Hinweise, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header usw.
Zu wissen, welcher Browser verwendet wird, ist irrelevant. Was wir in diesem Fall tatsächlich suchen, ist die Feature-Erkennung, die weiter unten im Detail beschrieben wird.

## Alternativen zum UA-Sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browser-Erkennung, die robuster sind und in viel mehr Szenarien anwendbar sind als UA-Sniffing.

### Feature-Erkennung

Die Feature-Erkennung prüft, ob ein bestimmtes Feature für den Client verfügbar ist, anstatt herauszufinden, welcher Browser Ihre Seite rendert.
Für den Fall, dass ein Feature nicht unterstützt wird, verwenden Sie stattdessen ein Fallback.
Das folgende Feature-Erkennungsbeispiel prüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt.
Sie können dies tun, indem Sie prüfen, ob eine `geolocation`-Eigenschaft im globalen [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ist.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Sie können dies für viele Features tun.
Zum Beispiel können Sie feststellen, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird usw.:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Styles können Sie auch Feature-Erkennung in CSS mithilfe der [`@supports`](/de/docs/Web/CSS/@supports)-At-Regel durchführen, kombiniert mit dem `not`-Schlüsselwort, wenn Sie das Fehlen eines Features prüfen möchten.
Siehe [Using feature queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) für Informationen zur Verwendung in CSS.

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

In seltenen Fällen, in denen sich das Verhalten der Browser für ein Feature unterscheidet, sollten Sie testen, wie Browser die API implementieren und auf dieser Grundlage bestimmen, wie sie verwendet werden soll.
Um mehr darüber zu erfahren, sehen Sie die Dokumentation [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Erkennung von Mobilgeräten

Ein häufiger Fehlgebrauch von UA-Sniffing (und [Client-Hinweisen](#client-hinweise)) besteht darin, zu erkennen, ob der Client ein mobiles Gerät ist.
In der Regel sind die Leute tatsächlich motiviert, zu erkennen, ob das Gerät der Nutzer **touchfreundlich** ist und einen kleinen Bildschirm hat, sodass sie ihre Website optimieren können, indem sie beispielsweise zusätzliche Abstände zu Schaltflächen hinzufügen.

Stattdessen sollten Sie Features mit modernen APIs erkennen.
Um beispielsweise den Touch-Support zu überprüfen, verwenden Sie die Eigenschaft [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints) in der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Anliegen, wie Layouts, verwenden Sie moderne CSS-Techniken wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid](/de/docs/Web/CSS/CSS_grid_layout) für flexible Layouts.
Statt Inhalte auf kleinen Bildschirmen zu verstecken, passen Sie das Layout dynamisch an.
[Media Queries](/de/docs/Web/CSS/CSS_media_queries) sollten die meisten Layoutänderungen handhaben, wodurch die Notwendigkeit für JavaScript-basierte Anpassungen reduziert wird.

Wenn Sie sicherstellen möchten, dass reibungslose Übergänge stattfinden, wenn Benutzer ihre Geräte drehen oder zwischen verschiedenen Bildschirmmodi wechseln, können Sie [Detecting device orientation](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) in Betracht ziehen.
Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), obwohl Sie sicherstellen sollten, dass Sie die Kompatibilitätsdaten überprüfen, da die Unterstützung stark variieren kann.

### Client-Hinweise

Für auf Blink basierende Browser (Chromium, Edge, Brave, Vivaldi usw.) ist eine Alternative [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints).
Bei Client-Hinweisen fordert der Server proaktiv Geräteinformationen von einem Client über HTTP-Header oder über die [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client-Hinweise sind im Erkennen von für Blink-basierte Browsern besser als UA-Sniffing, da sie nicht so häufig gefälscht werden und sie bieten kleinere, zuverlässigere Informationen, die leichter zu analysieren sind.
Das Ändern der Seitenfunktionalität basierend auf Client-Hinweisen ist immer noch eine schlechte Idee!
Wo möglich, sollten Sie stattdessen die Feature-Erkennung und die progressive Verbesserung [wie oben beschrieben](#warum_feature-erkennung_besser_ist_als_browser-erkennung) verwenden.

Zum Beispiel sendet der Server im HTTP-Mechanismus einen {{httpheader("Accept-CH")}}-Header zusammen mit einer Liste von Headern, die vom Client in nachfolgenden Anfragen enthalten sein sollten.
Angenommen, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies fordert die folgenden Header vom Client in nachfolgenden Anfragen an:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein Boolean, um anzuzeigen, ob der Client ein mobiles Gerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client arbeitet ("Windows", "Android" usw.).
- {{httpheader("Sec-CH-UA")}}: die Marken- und bedeutende Versionsinformation des User-Agents.

Angenommen, der Client unterstützt Client-Hinweise, können die UA-Client-Hinweise in nachfolgenden Anfragen erscheinen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hinweise zu erfahren, lesen Sie [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints).
Stellen Sie sicher, dass Sie die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility)-Details prüfen, bevor Sie dieses Feature verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive Enhancement")}}
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in 'Schichten', beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinanderfolgenden Schichten, wobei jede mehr Features verwendet.
- {{Glossary("Graceful_degradation", "Graceful Degradation")}}
  - : Dies ist ein Top-Down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Features erstellen und dann anpassen, um sie auch in älteren Browsern funktionsfähig zu machen. Dies kann schwieriger sein und weniger effektiv als progressive Verbesserung, kann jedoch in einigen Fällen nützlich sein.

## Ungültige Gründe zur Verwendung von Browser-Erkennung

Wenn Sie immer noch die Browser-Erkennung anstelle von Feature-Erkennung und progressiver Verbesserung in Betracht ziehen, prüfen Sie, ob Sie von den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen bestimmten Bug in einer bestimmten Browserversion zu umgehen**
  - : Es ist unwahrscheinlich, dass Sie die erste Person sind, die darauf stößt.
    Experten oder Personen mit einem anderen Blickwinkel können Ihnen Hinweise geben, wie Sie den Fehler besser vermeiden oder umgehen können.
    Wenn das Problem ungewöhnlich ist, lohnt es sich zu prüfen, ob dieser Fehler über Bug-Tracking-Systeme [Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/) beim Browser-Hersteller gemeldet wurde.
    Browser-Hersteller achten auf Fehlerberichte, und Ihre könnten helfen, das Problem zu beheben oder zuverlässigere Workarounds bereitzustellen.
- **Bereitstellung unterschiedlichen HTMLs je nach Browser des Besuchers**
  - : Dies ist normalerweise eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist.
    Können Sie dies durch das Hinzufügen von nicht-semantischen {{ HTMLElement("div") }} oder {{ HTMLElement("span") }}-Elementen verhindern?
    Erwägen Sie, ob tatsächlich ein Problem mit Ihrem Design vorliegt: Können Sie progressive Verbesserung oder fluide Layouts verwenden, um Ihr Bedürfnis, dies zu tun, zu reduzieren?
    Der Aufwand beim genauen UA-Erkennen im Vergleich zum Überarbeiten Ihres HTML sollte ein entscheidender Faktor sein.
- **Versuch, herauszufinden, ob der Browser eines Besuchers ein bestimmtes Feature hat**
  - : Ihre Website benötigt die Nutzung eines bestimmten Features, das einige Browser noch nicht unterstützen, und Sie möchten Nutzern mit inkompatiblen Browsern eine ältere Website anbieten, von der Sie wissen, dass sie funktioniert.
    Dies ist der schlechteste Grund, UA-Erkennung zu verwenden, da alle Browser wahrscheinlich irgendwann aufholen werden.
    Außerdem ist es nicht praktikabel, jeden Browser auf verschiedene Features in dieser Weise zu testen.

## Extraktion relevanter UA-String-Teile

Wenn Sie alle oben genannten Optionen erkundet haben und dennoch den UA-String als letzten Ausweg analysieren müssen, gibt es in diesem Abschnitt einige Hinweise, die helfen.
Leider gibt es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings, sodass wir beim schwierigen Teil angekommen sind.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} teilen, stellen eine Seite auf die gleiche Weise dar: Es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktioniert.
Es gibt drei aktive große Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, was darauf hinweist, dass die Rendering-Engine `Gecko` ist, und der "gecko-Trail" ist der feste String `20100101`, was "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Das Erkennen von Rendering-Engine-Namen ist auf Websites üblich, und viele User-Agents haben historisch andere Rendering-Namen hinzugefügt, um zu vermeiden, dass sie aufgrund eines Rendering-Engine-Namens allein ausgeschlossen werden.
Es ist daher wichtig, darauf zu achten, keine Fehlalarme zu verursachen, wenn Sie die Rendering-Engine erkennen, da diese Methode besonders unzuverlässig ist.
Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                     |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                             |
| Gecko    | `Gecko/xyz`       |                                                                                                                                             |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko`-String hinzu, der bei einer unvorsichtigen Erkennung möglicherweise zu Fehlalarmen für Gecko führt. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 (siehe 'Blink') nicht mehr verwendet.                                           |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 (siehe 'Blink') nicht mehr verwendet.                                          |

### Version der Rendering-Engine

Die meisten Rendering-Engines legen die Versionsnummer im `RenderingEngine/VersionNumber` Token ab, mit der bemerkenswerten Ausnahme von Gecko.
Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Versionsnummer der Rendering-Engine `138.0` ist, die der Firefox-Version entspricht:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browser-Name und Version

Wenn Leute sagen, sie wollen "Browser-Erkennung", meinen sie tatsächlich oft "Rendering-Engine-Erkennung".
Das bedeutet in der Regel, dass sie "Gecko" oder "WebKit" erkennen wollen, im Gegensatz zu "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber`.
Aber da der Name nicht die einzige Information im User-Agent-String in diesem Format ist, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der Name, den Sie suchen, vorhanden ist.
Der Browser-Name ist der String `Firefox/138.0` im folgenden Beispiel, was darauf hinweist, dass der Browser-Name `Firefox` ist und die Software-Version `138.0`:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome zum Beispiel meldet sowohl Chrome als auch Safari.
Um Safari zu erkennen, müssen Sie nach dem Safari-String und dem Fehlen des Chrome-Strings suchen. Chromium meldet sich oft auch als Chrome und SeaMonkey berichtet sich als Firefox.

Seien Sie vorsichtig beim Verwenden von regulären Ausdrücken auf dem `BrowserName`-Teil, da User-Agents auch Strings um das Keyword/Value-Syntax enthalten können.
Safari & Chrome enthalten beispielsweise den String `like Gecko`.

| Browser-Name               | Muss enthalten  | Muss nicht enthalten             |
| -------------------------- | --------------- | -------------------------------- |
| Firefox                    | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                  | `Seamonkey/xyz` |                                  |
| Chrome                     | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                   | `Chromium/xyz`  |                                  |
| Safari                     | `Safari/xyz`\*  | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (engine: Blink)  | `OPR/xyz`       |                                  |
| Opera 12- (engine: Presto) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz`-Token und eine benutzerfreundliche im `Version/xyz`-Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese nicht in bestimmten Fällen vortäuscht.
Deshalb ist die Browser-Erkennung mittels des User-Agent-Strings unzuverlässig und sollte nur mit der Prüfung der Versionsnummer erfolgen (das Vortäuschen von älteren Versionen ist weniger wahrscheinlich).

### Erkennung des Betriebssystems

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht bei Web-fokussierten Plattformen), aber das Format variiert.
Es ist ein fester String zwischen zwei Semikolons im Kommentar-Teil des User-Agents, und diese Strings sind für jeden Browser spezifisch.

Sie zeigen das Betriebssystem und oft seine Version und Informationen über die zugrunde liegende Hardware an (32 oder 64 Bits, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).
Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, daher sollten Sie sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden, sodass Muster im Voraus bekannt sind.
Betrachten Sie eine Umfrage unter Besuchern oder User-Agent-Strings, um Ihren Code bei neuen Browserversionen anzupassen.

### Mobilgerät, Tablet oder Desktop

Der häufigste Grund, User-Agent-Sniffing durchzuführen, ist herauszufinden, auf welchem Gerätetyp der Browser läuft.

- Nehmen Sie niemals an, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft.
  Insbesondere verlassen Sie sich nicht auf unterschiedliche Standards für verschiedene Browser oder Rendering-Engines.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser mobil, Tablet oder Desktop ist.
  Das Betriebssystem kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browser-Anbieter angeben, dass ihre Browser auf einem Mobilgerät laufen:

| Browser                                                             | Regel                                                    | Beispiel                                                                                                                                                         |
| ------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                            | `Mobile` oder `Tablet` im Kommentar.                     | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                    | `Mobile Safari`-Token außerhalb des Kommentars.          | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge on Android) | `Mobile Safari`-Token außerhalb des Kommentars.          | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                          | `Mobile/xyz` und `Edge/`-Token außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können nach dem String `Mobi` irgendwo im UA-String suchen.
Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Seite bereitstellen (die bestenfalls Touch-Eingaben unterstützen sollte, da Desktop-Geräte Touchscreens haben können).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
