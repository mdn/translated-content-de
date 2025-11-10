---
title: Browser-Erkennung durch den User-Agent-String (UA-Sniffing)
short-title: Browser-Erkennung durch den UA-String
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Bei jeder Anfrage an einen Server fügen Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}}-Header mit einem Wert hinzu, der als {{Glossary("user_agent", "user agent")}} (UA) String bezeichnet wird. Dieser String soll den Browser, dessen Versionsnummer und das Betriebssystem des Hosts identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können diesen String auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) Eigenschaft in JavaScript abrufen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu analysieren (manchmal als "UA-Sniffing" bezeichnet) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern. Dies ist jedoch sehr schwer zuverlässig zu tun und verursacht häufig Fehler.

Dieses Dokument beschreibt häufige Fallstricke bei der Verwendung des UA-Strings zur Browsererkennung und die empfohlenen Alternativen. Am Ende geben wir einige Hinweise zur UA-Erkennung mit dem String, aber dies sollten Sie nur tun, wenn es absolut notwendig ist!

## Warum Feature-Erkennung besser ist als Browser-Erkennung

Um zu veranschaulichen, warum der Versuch, die Funktionalität einer Website pro Browser anzupassen, Komplexität und mögliche Fehler einführt, betrachten Sie das folgende Beispiel. Eine Anwendung möchte die Funktion `splitUpString()` in JavaScript unter Verwendung einer [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) verwenden:

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

Dieser Code macht mehrere Annahmen, die falsch sein können und den Code brechen, wenn er in einem falschen Browser oder einer falschen Browserversion ausgeführt wird:

1. Alle User-Agent-Strings, die das Substring `Chrome` enthalten, zeigen einen Chrome-Browser an.

   Eines der größten Probleme bei der Browser-Erkennung basierend auf UA-Strings ist, dass Browser und User Agents routinemäßig vorgeben, ein anderer Browser zu sein oder Informationen basierend auf mehreren Browsern zu enthalten.

2. Die Lookbehind-Funktion ist immer verfügbar, wenn der Browser Chrome ist. In Wirklichkeit könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder eine spätere Version von Chrome, die sie entfernt.
3. Am wichtigsten: Es wird angenommen, dass keine anderen Browser die Funktion unterstützen, obwohl sie jederzeit zu anderen Browsern hinzugefügt werden könnte. Alle nicht übereinstimmenden Browser bleiben bei einem ineffizienten Fallback hängen.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode der Browser-Erkennung bestehen; ob UA-Sniffing, Client-Hinweise, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header und so weiter. Zu wissen, welcher Browser verwendet wird, ist irrelevant. Was wir in diesem Fall eigentlich suchen, ist die Funktions-Erkennung, die weiter unten ausführlicher beschrieben wird.

## Alternativen zum UA-Sniffing

Die folgenden Abschnitte beschreiben Alternativen zur Browser-Erkennung, die robuster sind und in viel mehr Szenarien anwendbar sind als UA-Sniffing.

### Feature-Erkennung

Feature-Erkennung bedeutet, zu überprüfen, ob eine bestimmte Funktion für den Client verfügbar ist, anstatt herauszufinden, welcher Browser Ihre Seite rendert. Für Fälle, in denen eine Funktion nicht unterstützt wird, verwenden Sie stattdessen einen Fallback. Das folgende Beispiel zur Feature-Erkennung überprüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt. Sie können dies tun, indem Sie nach einer `geolocation` Eigenschaft im globalen [`Navigator`](/de/docs/Web/API/Navigator) Objekt suchen.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Dies können Sie für viele Funktionen tun. Zum Beispiel können Sie bestimmen, ob PDF-Dateien inline angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird, und so weiter:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Stile können Sie auch Feature-Erkennung in CSS unter Verwendung der [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) At-Regel durchführen, kombiniert mit dem `not` Schlüsselwort, wenn Sie das Fehlen einer Funktion überprüfen möchten. Siehe [Using feature queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) für Informationen zur Verwendung in CSS.

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

In seltenen Fällen, in denen sich das Verhalten für ein Feature zwischen Browsern unterscheidet, sollten Sie testen, wie Browser die API implementieren und bestimmen, wie Sie sie basierend darauf nutzen. Um mehr zu erfahren, siehe die [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) Dokumentation.

#### Mobiles Gerät erkennen

Ein häufiger Missbrauch von UA-Sniffing (und [Client-Hinweisen](#client-hinweise)) besteht darin, zu erkennen, ob der Client ein mobiles Gerät ist. Normalerweise sind Menschen tatsächlich bestrebt zu erkennen, ob das Gerät des Benutzers **touch-freundlich** ist und einen kleinen Bildschirm hat, damit sie ihre Website optimieren können, indem sie beispielsweise zusätzliche Polsterung zu Schaltflächen hinzufügen.

Stattdessen sollten Sie moderne APIs verwenden, um Funktionen zu erkennen. Um beispielsweise die Touch-Unterstützung zu überprüfen, versuchen Sie die [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft in der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Belange, wie Layout, verwenden Sie modernes CSS wie [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) für flexible Layouts. Anstatt Inhalte auf kleineren Bildschirmen zu verstecken, passen Sie das Layout dynamisch an. [Media queries](/de/docs/Web/CSS/Guides/Media_queries) sollten die meisten Layout-Änderungen behandeln, wodurch die Notwendigkeit für JavaScript-basierte Anpassungen reduziert wird.

Wenn Sie glatte Übergänge sicherstellen möchten, wenn Benutzer ihre Geräte drehen oder zwischen verschiedenen Bildschirmmodi wechseln, können Sie [Detecting device orientation](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) betrachten. Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API), überprüfen Sie jedoch unbedingt die Kompatibilitätsdaten, da die Unterstützung stark variieren kann.

### Client-Hinweise

Für auf Blink basierende Browser (Chromium, Edge, Brave, Vivaldi, etc.) ist eine Alternative [User agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints). In Client-Hinweisen fordert der Server proaktiv Geräteinformationen von einem Client über HTTP-Header oder über [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) an.

Client-Hinweise sind besser als UA-Sniffing, um auf Blink basierende Browser zu erkennen, da sie nicht so häufig gefälscht werden, und sie liefern kleinere, zuverlässigere Informationen, die einfacher zu analysieren sind. Die Änderung der Funktionalität der Website basierend auf Client-Hinweisen ist immer noch keine gute Idee! Wo möglich, sollten Sie stattdessen Feature-Erkennung und progressive Verbesserung verwenden [wie oben beschrieben](#warum_feature-erkennung_besser_ist_als_browser-erkennung).

Beispielsweise schließt der Server beim HTTP-Mechanismus einen {{httpheader("Accept-CH")}}-Header mit einer Liste von Headern ein, die vom Client in den folgenden Anfragen enthalten sein sollten. Angenommen, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies fordert die folgenden Header vom Client in den nachfolgenden Anfragen an:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein Boolean, der angibt, ob der Client ein mobiles Gerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client arbeitet ("Windows", "Android", etc.).
- {{httpheader("Sec-CH-UA")}}: die User-Agent-Marke und bedeutende Versionsinformationen.

Angenommen, der Client unterstützt Client-Hinweise, können die UA-Client-Hinweise in nachfolgenden Anfragen erscheinen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hinweise zu erfahren, siehe [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints). Stellen Sie sicher, dass Sie die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) Details für weitere Informationen überprüfen, bevor Sie diese Funktion verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive Enhancement")}}
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in "Schichten", unter Verwendung eines bottom-up Ansatzes, beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinanderfolgenden Schichten, jede mit mehr Funktionen.
- {{Glossary("Graceful_degradation", "Graceful Degradation")}}
  - : Dies ist ein top-down Ansatz, bei dem Sie die bestmögliche Website erstellen, indem Sie alle gewünschten Funktionen nutzen und sie dann so anpassen, dass sie auch in älteren Browsern funktioniert. Dies kann schwieriger sein und weniger effektiv als progressive Verbesserung, kann aber in einigen Fällen nützlich sein.

## Ungültige Gründe für die Verwendung der Browser-Erkennung

Wenn Sie immer noch erwägen, Browser-Erkennung anstelle von Feature-Erkennung und progressiver Verbesserung zu verwenden, prüfen Sie, ob Sie aus den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen spezifischen Fehler in einer bestimmten Browserversion zu umgehen**
  - : Sie werden wahrscheinlich nicht die erste Person sein, die darauf stößt. Experten oder Personen mit einem anderen Standpunkt können Ihnen Hinweise geben, wie Sie den Fehler besser vermeiden oder umgehen können. Wenn das Problem ungewöhnlich ist, lohnt es sich zu prüfen, ob dieser Fehler dem Browserhersteller über Bug-Tracking-Systeme gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browserhersteller achten auf Fehlermeldungen, und Ihre könnte helfen, das Problem zu beheben oder verlässlichere Workarounds bereitzustellen.
- **Unterschiedliches HTML abhängig vom Browser des Besuchers bereitstellen**
  - : Dies ist normalerweise eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist. Können Sie es vermeiden, indem Sie nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen? Überlegen Sie, ob es tatsächlich ein Problem mit Ihrem Design gibt: können Sie progressive Verbesserung oder flüssige Layouts verwenden, um Ihren Bedarf daran zu reduzieren? Der Aufwand für eine genaue UA-Erkennung im Vergleich zur Überarbeitung Ihres HTML sollte ein entscheidender Faktor sein.
- **Versuchen herauszufinden, ob der Browser eines Besuchers eine bestimmte Funktion hat**
  - : Ihre Website muss eine bestimmte Funktion verwenden, die einige Browser noch nicht unterstützen, und Sie möchten, dass Benutzern mit inkompatiblen Browsern eine ältere Website mit weniger Funktionen angezeigt wird, von denen Sie wissen, dass sie funktioniert. Dies ist der schlechteste Grund, UA-Erkennung zu verwenden, da alle Browser wahrscheinlich irgendwann aufholen werden. Darüber hinaus ist es nicht praktikabel, jeden Browser auf verschiedene Funktionen in dieser Weise zu testen.

## Extrahieren relevanter UA-String-Teile

Wenn Sie alle oben genannten Optionen geprüft haben und immer noch als letztes Mittel den UA-String analysieren müssen, gibt es in diesem Abschnitt einige Hinweise, die helfen werden. Leider gibt es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings, daher kommen wir nun zum kniffligen Teil.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} teilen, werden eine Seite auf die gleiche Weise anzeigen: es ist oft eine faire Annahme, dass das, was in einem Browser funktioniert, auch im anderen funktionieren wird. Es gibt drei aktive Haupt-Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, der anzeigt, dass die Rendering-Engine `Gecko` ist und der "gecko-Trail" der feste String `20100101` ist, was "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Die Erkennung von Rendering-Engine-Namen ist auf Websites verbreitet, und viele User Agents haben historisch andere Rendering-Namen hinzugefügt, um zu vermeiden, dass Websites sie basierend auf dem Rendering-Engine-Namen ausschließen. Daher ist es wichtig, darauf zu achten, bei der Erkennung der Rendering-Engine keine Fehlalarme auszulösen, da diese Methode besonders unzuverlässig ist. Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wurde:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                                 |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                         |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                         |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko`-String hinzu, der einen Fehlalarm für Gecko auslösen kann, wenn die Erkennung nicht sorgfältig angewendet wird. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                       |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink').                                                      |

### Rendering-Engine-Version

Die meisten Rendering-Engines fügen die Versionsnummer im `RenderingEngine/VersionNumber`-Token ein, mit der bemerkenswerten Ausnahme Gecko. Im folgenden Beispiel ist es der String `rv:138.0`, was bedeutet, dass die Rendering-Engine-Versionsnummer `138.0` ist, was der gleichen Version wie Firefox entspricht:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browser-Name und Version

Wenn Menschen sagen, sie wollen "Browser-Erkennung", meinen sie oft tatsächlich "Rendering-Engine-Erkennung". Dies bedeutet in der Regel, "Gecko" oder "WebKit" zu erkennen, anstatt "Firefox" oder "Safari".

Die meisten Browser setzen den Namen und die Version im Format `BrowserName/VersionNumber`. Da der Name jedoch nicht die einzige Information in einem User-Agent-String in diesem Format ist, können Sie den Namen des Browsers nicht entdecken, sondern nur prüfen, ob der gesuchte Name vorhanden ist. Der Browsername ist der String `Firefox/138.0` im folgenden Beispiel, das anzeigt, dass der Browsername `Firefox` ist und die Softwareversion `138.0`:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome beispielsweise berichtet sowohl Chrome als auch Safari. Um Safari zu erkennen, müssen Sie den Safari-String überprüfen und das Fehlen des Chrome-Strings sicherstellen. Chromium meldet sich oft auch als Chrome und SeaMonkey berichtet sich als Firefox.

Seien Sie vorsichtig, wenn Sie reguläre Ausdrücke auf den `BrowserName`-Teil anwenden, da User Agents auch Strings um die Keyword/Value-Syntax enthalten. Safari & Chrome enthalten zum Beispiel den String `like Gecko`.

| Browsername                        | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz` \* | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\* Safari gibt zwei Versionsnummern: eine technische im `Safari/xyz`-Token und eine benutzerfreundliche in einem `Version/xyz`-Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese nicht in bestimmten Fällen fälschen wird. Aus diesem Grund ist die Browser-Erkennung unter Verwendung des User-Agent-Strings unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer durchgeführt werden (das Spoofing vergangener Versionen ist weniger wahrscheinlich).

### Betriebssystem-Erkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl nicht bei plattformfokussierten Plattformen), aber das Format variiert. Es ist ein fester String zwischen zwei Semikolons im Kommentarteil des User-Agent und diese Strings sind spezifisch für jeden Browser.

Sie geben das OS und oft seine Version und Informationen über die zugrunde liegende Hardware (32 oder 64 Bit, Intel/PPC für Mac, oder x86/ARM CPU-Architektur für Windows PCs) an. Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, daher sollten Sie sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden, damit Muster im Voraus bekannt sind. Erwägen Sie eine Umfrage bei Besuchern oder UA-Strings, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobil, Tablet oder Desktop

Der häufigste Grund für User Agent-Sniffing ist die Bestimmung, welchen Gerätetyp der Browser ausführt.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Insbesondere sollten Sie sich nicht auf unterschiedliche Standardeinstellungen für unterschiedliche Browser oder Rendering-Engines verlassen.
- Verwenden Sie niemals den OS-Token, um zu definieren, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop ist. Das OS kann auf mehr als einem Gerätetyp laufen (z. B. läuft Android sowohl auf Tablets als auch auf Handys).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter anzeigen, dass ihre Browser auf einem Mobilgerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                      | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können nach dem String `Mobi` überall im UA-String suchen. Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Site bereitstellen (die, als Best Practice, sowieso Touch-Eingaben unterstützen sollte, da Desktop-Geräte Touchscreens haben können).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
