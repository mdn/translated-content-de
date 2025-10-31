---
title: Browsererkennung mittels User-Agent-String (UA-Sniffing)
short-title: Browsererkennung mit dem UA-String
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Zusammen mit jeder Anfrage an einen Server senden Browser einen {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}} Header mit einem Wert, der als {{Glossary("user_agent", "user agent")}} (UA) bezeichnet wird.
Dieser String soll den Browser, dessen Versionsnummer und das zugrunde liegende Betriebssystem identifizieren.

```http
User-Agent: <product> / <product-version> <comment>
```

Sie können auf diesen String auch über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) Eigenschaft in JavaScript zugreifen:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Es mag verlockend sein, den UA-String zu analysieren (manchmal „UA-Sniffing“ genannt) und das Verhalten Ihrer Website basierend auf den Werten im UA-String zu ändern. Dies ist jedoch sehr schwer zuverlässig zu tun und oft die Ursache für Fehler.

Dieses Dokument beschreibt gängige Fallstricke bei der Verwendung des UA-Strings zur Browsererkennung und die empfohlenen Alternativen.
Am Ende geben wir einige Hinweise zur UA-Erkennung mithilfe des Strings, aber Sie sollten dies nur tun, wenn es absolut notwendig ist!

## Warum Funktionsprüfung besser ist als Browsererkennung

Um zu veranschaulichen, warum der Versuch, die Funktionalität der Website für jeden Browser anzupassen, Komplexität und mögliche Fehler einführt, betrachten Sie das folgende Beispiel.
Eine Anwendung möchte eine `splitUpString()`-Funktion in JavaScript mit [Lookbehind Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) verwenden:

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

Dieser Code macht mehrere Annahmen, die möglicherweise falsch sind, und die den Code zum Absturz bringen, wenn er im falschen Browser oder in der falschen Browserversion ausgeführt wird:

1. Alle User Agent-Strings, die den Substring `Chrome` enthalten, weisen auf einen Chrome-Browser hin.

   Eines der größten Probleme bei der Browsererkennung basierend auf UA-Strings besteht darin, dass Browser und User Agents routinemäßig vorgeben, ein anderer Browser zu sein, oder Informationen basierend auf mehreren Browsern enthalten.

2. Das Lookbehind-Feature ist immer verfügbar, wenn der Browser Chrome ist.
   In Wirklichkeit könnte der Browser eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder es könnte eine spätere Version von Chrome sein, die es entfernt.
3. Am wichtigsten ist, dass angenommen wird, dass keine anderen Browser das Feature unterstützen, obwohl es jederzeit in jeden anderen Browser hinzugefügt werden könnte.
   Alle nicht übereinstimmenden Browser bleiben bei einer ineffizienten Alternative hängen.

Es ist wichtig zu beachten, dass diese Probleme unabhängig von der Methode der Browsererkennung bestehen werden; UA-Sniffing, Client-Hinweise, das Vorhandensein, Fehlen oder der Inhalt anderer HTTP-Header usw.
Zu wissen, welcher Browser verwendet wird, ist irrelevant; wonach wir in diesem Fall tatsächlich suchen, ist Funktionsprüfung, die im Folgenden ausführlicher beschrieben wird.

## Alternativen zum UA-Sniffing

In den folgenden Abschnitten werden Alternativen zur Browsererkennung beschrieben, die robuster und in vielen mehr Szenarien anwendbar sind als das UA-Sniffing.

### Funktionsprüfung

Funktionsprüfung bedeutet, zu überprüfen, ob eine bestimmte Funktion dem Client zur Verfügung steht, anstatt herauszufinden, welcher Browser Ihre Seite rendert.
Für Fälle, in denen eine Funktion nicht unterstützt wird, verwenden Sie stattdessen eine Alternative.
Das folgende Beispiel zur Funktionsprüfung überprüft, ob der Client die [Geolocation API](/de/docs/Web/API/Geolocation_API) unterstützt.
Dies können Sie tun, indem Sie auf eine `geolocation` Eigenschaft zugreifen, die auf dem globalen [`Navigator`](/de/docs/Web/API/Navigator) Objekt verfügbar ist.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

Dies können Sie für viele Funktionen tun.
Zum Beispiel können Sie feststellen, ob PDF-Dateien in der Vorschau angezeigt werden können oder ob die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) unterstützt wird usw.:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

Für Stile können Sie auch Funktionsprüfungen in CSS mit der [`@supports`](/de/docs/Web/CSS/@supports) At-Regel durchführen, kombiniert mit dem `not` Schlüsselwort, wenn Sie das Fehlen einer Funktion überprüfen möchten.
Siehe [Verwenden von Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) für Informationen zur Verwendung davon in CSS.

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

In seltenen Fällen, in denen sich das Verhalten für eine Funktion zwischen Browsern unterscheidet, sollten Sie testen, wie Browser die API implementieren und bestimmen, wie sie basierend darauf verwendet werden soll.
Um mehr zu erfahren, siehe die Dokumentation [Implementieren der Funktionsprüfung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Erkennung mobiler Geräte

Ein häufiger Missbrauch des UA-Sniffings (und von [Client-Hinweisen](#client-hinweise)) besteht darin, zu erkennen, ob der Client ein mobiles Gerät ist.
In der Regel möchten Benutzer tatsächlich erkennen, ob das Gerät des Benutzers **touch-fähig** ist und einen kleinen Bildschirm hat, damit sie ihre Website optimieren können, indem sie beispielsweise Schaltflächen mit zusätzlichem Abstand versehen.

Stattdessen sollten Sie Funktionen mithilfe moderner APIs erkennen.
Zum Beispiel, um die Unterstützung für Touch zu überprüfen, verwenden Sie die [maxTouchPoints](/de/docs/Web/API/Navigator/maxTouchPoints) Eigenschaft in der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

Für andere Anliegen, wie Layouts, verwenden Sie modernes CSS wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid](/de/docs/Web/CSS/CSS_grid_layout) für flexible Layouts.
Anstatt Inhalte auf kleineren Bildschirmen zu verstecken, passen Sie das Layout dynamisch an.
[Media Queries](/de/docs/Web/CSS/CSS_media_queries) sollten die meisten Layoutänderungen bewältigen und den Bedarf an JavaScript-basierten Anpassungen reduzieren.

Wenn Sie reibungslose Übergänge sicherstellen möchten, wenn Benutzer ihre Geräte drehen oder zwischen verschiedenen Bildschirmmodi wechseln, können Sie sich [Erkennen der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation) ansehen.
Für faltbare Geräte gibt es neuere APIs wie die [Device Posture API](/de/docs/Web/API/Device_Posture_API). Vergewissern Sie sich jedoch, dass Sie die Kompatibilitätsdaten überprüfen, da die Unterstützung stark variiert.

### Client-Hinweise

Für Blink-basierte Browser (Chromium, Edge, Brave, Vivaldi usw.) ist eine Alternative [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints).
Bei Client-Hinweisen fordert der Server proaktiv über HTTP-Header oder über die [JavaScript API](/de/docs/Web/API/User-Agent_Client_Hints_API) Gerätinformationen von einem Client an.

Client-Hinweise sind besser als UA-Sniffing für die Erkennung von Blink-basierten Browsern, da sie nicht so häufig gefälscht werden und sie kleinere, zuverlässigere Informationen liefern, die leichter zu analysieren sind.
Es ist jedoch immer noch eine schlechte Idee, die Funktionalität der Website basierend auf Client-Hinweisen zu ändern!
Wo möglich sollten Sie stattdessen Funktionsprüfung und progressive Verbesserung [wie oben beschrieben](#warum_funktionsprüfung_besser_ist_als_browsererkennung) verwenden.

Zum Beispiel sendet der Server im HTTP-Mechanismus einen {{httpheader("Accept-CH")}} Header zusammen mit einer Liste von Headers, die vom Client in nachfolgenden Anfragen aufgenommen werden sollten.
Angenommen, der Server sendet diese Antwort an den Client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Dies fordert die folgenden Header vom Client in nachfolgenden Anfragen an:

- {{httpheader("Sec-CH-UA-Mobile")}}: ein boolescher Wert, der anzeigt, ob der Client ein mobiles Gerät ist.
- {{httpheader("Sec-CH-UA-Platform")}}: die Plattform, auf der der Client läuft („Windows“, „Android“ usw.).
- {{httpheader("Sec-CH-UA")}}: das Branding und die wesentlichen Versionsinformationen des User-Agents.

Angenommen, der Client unterstützt Client-Hinweise, können die UA-Client-Hinweise in nachfolgenden Anfragen erscheinen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Um mehr über Client-Hinweise zu erfahren, siehe [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints).
Vergewissern Sie sich, dass Sie die [Browser-Kompatibilität](/de/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) Details überprüfen, bevor Sie diese Funktion verwenden.

### Andere Techniken und Prinzipien

- {{Glossary("Progressive_enhancement", "Progressive Enhancements")}}
  - : Diese Designtechnik beinhaltet das Entwickeln Ihrer Website in "Schichten" mittels eines Bottom-up-Ansatzes, beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinanderfolgenden Schichten, die jeweils mehr Funktionen nutzen.
- {{Glossary("Graceful_degradation", "Graceful Degradation")}}
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und sie dann anpassen, um auch in älteren Browsern zu funktionieren. Dies kann schwieriger sein und weniger effektiv als progressive Enhancement, aber in einigen Fällen nützlich sein.

## Ungültige Gründe für die Verwendung von Browsererkennung

Wenn Sie immer noch Browsererkennung anstelle von Funktionsprüfung und progressiver Verbesserung erwägen, prüfen Sie, ob Sie von den folgenden (ungültigen) Gründen motiviert sind:

- **Sie versuchen, einen spezifischen Fehler in einer bestimmten Browserversion zu umgehen**
  - : Sie werden wahrscheinlich nicht die erste Person sein, die auf diesen Fehler stößt.
    Experten oder Personen mit einer anderen Perspektive können Ihnen Hinweise geben, wie Sie den Fehler besser umgehen oder vermeiden können.
    Wenn das Problem selten ist, lohnt es sich zu überprüfen, ob dieser Fehler bereits dem Browserhersteller über Bugtracking-Systeme ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)) gemeldet wurde.
    Browserhersteller achten auf Fehlermeldungen, und Ihre könnte helfen, das Problem zu beheben oder zuverlässigere Workarounds bereitzustellen.
- **Ausliefern unterschiedlicher HTML-Inhalte, abhängig vom Besucherbrowser**
  - : Dies ist normalerweise eine schlechte Idee, aber es gibt seltene Fälle, in denen dies notwendig ist.
    Können Sie dies verhindern, indem Sie nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen?
    Überlegen Sie, ob es tatsächlich ein Problem mit Ihrem Design gibt: Können Sie Progressive Enhancement oder flexible Layouts nutzen, um Ihren Bedarf dies zu tun zu reduzieren?
    Der Aufwand zur genauen UA-Erkennung im Vergleich zur Überarbeitung Ihres HTML sollte ein entscheidender Faktor sein.
- **Sie versuchen herauszufinden, ob der Browser eines Besuchers eine spezielle Funktion hat**
  - : Ihre Website benötigt eine bestimmte Funktion, die einige Browser noch nicht unterstützen, und Sie möchten, dass Benutzern mit inkompatiblen Browsern eine ältere Version der Website bereitgestellt wird, die mit weniger Funktionen, die Ihrer Meinung nach funktionieren, funktioniert.
    Dies ist der schlechteste Grund für die Verwendung von UA-Erkennung, da alle Browser wahrscheinlich irgendwann aufschließen werden.
    Außerdem ist es nicht praktikabel, jeden Browser auf unterschiedliche Funktionen auf diese Weise zu testen.

## Relevante Teile des UA-String extrahieren

Wenn Sie alle oben genannten Optionen geprüft haben und Sie immer noch den UA-String analysieren müssen, als letztes Mittel, finden Sie in diesem Abschnitt einige Hinweise, die Ihnen helfen.
Leider gibt es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings, sodass wir zum kniffligen Teil kommen.

### Rendering-Engine

Browser, die eine gemeinsame {{Glossary("rendering_engine", "Rendering-Engine")}} verwenden, werden eine Seite auf die gleiche Weise darstellen: es ist oft eine berechtigte Annahme, dass das, was in einem Browser funktioniert, auch in einem anderen funktioniert.
Es gibt drei aktive Haupt-Rendering-Engines: {{Glossary("Blink", "Blink")}}, {{Glossary("Gecko", "Gecko")}} und {{Glossary("WebKit", "WebKit")}}.

Die Rendering-Engine ist der String `Gecko/20100101` im folgenden Beispiel, der darauf hinweist, dass die Rendering-Engine `Gecko` ist und der "gecko-Trail" der feste String `20100101` ist, was "Desktop" bedeutet:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Erkennung von Rendering-Engine-Namen ist auf Websites üblich, und viele User-Agents haben historisch andere Rendering-Namen hinzugefügt, um zu vermeiden, dass Websites sie aufgrund des Rendering-Engine-Namens ausschließen.
Daher ist es wichtig, darauf zu achten, keine Fehlalarme auszulösen, wenn die Rendering-Engine erkannt wird, da diese Methode besonders unzuverlässig ist.
Betrachten Sie den folgenden UA-String, der in Chrome 134 auf macOS gesendet wird:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Muss enthalten    | Details                                                                                                                                                     |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                             |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                             |
| WebKit   | `AppleWebKit/xyz` | WebKit-Browser fügen einen `like Gecko`-String hinzu, der, falls die Erkennung nicht sorgfältig angewendet wird, einen Fehlalarm für Gecko auslösen könnte. |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink')                                                            |
| EdgeHTML | `Edge/xyz`        | Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink').                                                          |

### Rendering-Engine-Version

Die meisten Rendering-Engines geben die Versionsnummer im Token `RenderingEngine/VersionNumber` an, mit der bemerkenswerten Ausnahme von Gecko.
Es ist der String `rv:138.0` im folgenden Beispiel, was bedeutet, dass die Versionsnummer der Rendering-Engine `138.0` ist, was mit der Firefox-Version identisch ist:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browser-Name und -Version

Wenn Leute sagen, sie wollen "Browsererkennung", meinen sie oft "Erkennung der Rendering-Engine".
Das bedeutet normalerweise, "Gecko" oder "WebKit" anstelle von "Firefox" oder "Safari" zu erkennen.

Die meisten Browser geben den Namen und die Version im Format `BrowserName/VersionNumber` an.
Aber da der Name nicht die einzige Information in einem User-Agent-String in diesem Format ist, können Sie nicht den Namen des Browsers herausfinden, Sie können nur prüfen, ob der Name, den Sie suchen, vorhanden ist.
Der Browsername ist der String `Firefox/138.0` im folgenden Beispiel, der darauf hinweist, dass der Browsername `Firefox` ist und die Softwareversion `138.0` beträgt:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Einige Browser senden widersprüchliche Informationen: Chrome beispielsweise meldet sowohl Chrome als auch Safari.
Um Safari zu erkennen, müssen Sie daher den Safari-String und das Fehlen des Chrome-Strings überprüfen, Chromium meldet sich oft auch selbst als Chrome und SeaMonkey meldet sich als Firefox.

Seien Sie vorsichtig, wenn Sie reguläre Ausdrücke auf den `BrowserName`-Teil anwenden, da User-Agents auch Strings rund um das Keyword/Value-Syntax enthalten.
Safari & Chrome enthalten zum Beispiel den String `like Gecko`.

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

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser diese nicht in bestimmten Fällen vortäuscht.
Deshalb ist die Browsererkennung anhand des User-Agent-Strings unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer durchgeführt werden (das Vortäuschen älterer Versionen ist weniger wahrscheinlich).

### Betriebssystemerkennung

Das Betriebssystem wird in den meisten UA-Strings gesendet (obwohl es nicht für webfokussierte Plattformen gilt), aber das Format variiert.
Es ist ein fester String zwischen zwei Semikolons im Kommentarteil des User-Agents, und diese Strings sind für jeden Browser spezifisch.

Sie geben das Betriebssystem an und oft dessen Version und Informationen zur zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).
Es ist der String `Intel Mac OS X 10.15` im folgenden Beispiel:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In allen Fällen können sich diese Strings ändern, sodass Sie sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden sollten, damit Muster im Voraus bekannt sind.
Erwägen Sie eine Umfrage bei Besuchern oder UA-Strings, um Ihren Code anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobil, Tablet oder Desktop

Der häufigste Grund für das Durchführen von User-Agent-Sniffing ist die Bestimmung, auf welchem Gerätetyp der Browser läuft.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft.
  Insbesondere verlassen Sie sich nicht auf unterschiedliche Standards für verschiedene Browser oder Rendering-Engines.
- Verwenden Sie niemals das Betriebssystem-Token, um festzulegen, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop läuft.
  Das Betriebssystem kann auf mehr als einem Gerätetyp ausgeführt werden (z. B. läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter angeben, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                      | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Kurz gesagt, Sie können nach dem String `Mobi` irgendwo im UA-String suchen.
Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Version bereitstellen (die, nach guter Praxis, Touch-Eingaben ohnehin unterstützen sollte, da Desktop-Geräte Touchscreens haben können).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementieren der Funktionsprüfung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) auf web.dev (2021)
