---
title: Erkennung des Browsers mittels User-Agent
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Verschiedene Webseiten oder Dienste für unterschiedliche Browser anzubieten, ist in der Regel eine schlechte Idee. Das Web soll für jeden zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich basierend auf der Verfügbarkeit von Funktionen fortlaufend verbessert, anstatt spezifische Browser anzusprechen.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch einige Grenzfälle, bei denen die Erkennung des Browsers notwendig ist. Die Verwendung des User-Agents zur Erkennung des Browsers erscheint einfach, ist aber tatsächlich ein sehr komplexes Problem. Dieses Dokument wird Sie so korrekt wie möglich in diesem Prozess anleiten.

> [!NOTE]
> Es lohnt sich, es zu wiederholen: Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden. Sie können fast immer eine bessere, breiter kompatible Lösung für Ihr Problem finden!

## Überlegungen vor der Nutzung der Browser-Erkennung

Wenn Sie die User-Agent-Zeichenfolge verwenden möchten, um den verwendeten Browser zu erkennen, ist der erste Schritt, dies nach Möglichkeit zu vermeiden. Beginnen Sie damit, zu identifizieren, **warum** Sie es tun möchten.

- Versuchen Sie, einen bestimmten Fehler in einer bestimmten Version eines Browsers zu umgehen?
  - : Suchen Sie in spezialisierten Foren oder fragen Sie dort: Es ist unwahrscheinlich, dass Sie der Erste sind, der auf dieses Problem stößt. Experten oder Personen mit einem anderen Blickwinkel können Ihnen Ideen geben, wie Sie den Fehler umgehen können. Wenn das Problem unüblich erscheint, sollten Sie überprüfen, ob dieser Fehler dem Browser-Hersteller über das Fehlerverfolgungssystem gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browserhersteller achten auf Fehlerberichte, und die Analyse kann auf andere Umgehungsmöglichkeiten für den Fehler hinweisen.
- Versuchen Sie, das Vorhandensein einer bestimmten Funktion zu überprüfen?
  - : Ihre Website muss eine bestimmte Webfunktion verwenden, die einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer zu einer älteren Website mit weniger Funktionen senden, von der Sie wissen, dass sie funktioniert. Dies ist der schlechteste Grund, um User-Agent-Erkennung zu verwenden, da es sehr wahrscheinlich ist, dass letztendlich alle anderen Browser aufholen werden. Darüber hinaus ist es nicht praktikabel, jeden der weniger verbreiteten Browser zu testen und für diese Webfunktionalitäten zu testen. Sie sollten **niemals** User-Agent-Sniffing betreiben. Es gibt **immer** die Alternative, stattdessen Funktionserkennung zu nutzen.
- Möchten Sie je nach verwendetem Browser unterschiedliches HTML bereitstellen?
  - : Dies ist normalerweise eine schlechte Praxis, aber es gibt einige Fälle, in denen dies notwendig ist. In diesen Fällen sollten Sie zuerst Ihre Situation analysieren, um sicherzustellen, dass es wirklich notwendig ist. Können Sie es verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Elemente hinzufügen? Die Schwierigkeit, die User-Agent-Erkennung erfolgreich zu verwenden, ist einige Unterbrechungen der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder fluide Layouts verwenden, um die Notwendigkeit dafür zu beseitigen?

## Vermeidung der User-Agent-Erkennung

Wenn Sie die User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Funktionserkennung

  - : Funktionserkennung ist, wenn Sie nicht versuchen, herauszufinden, welcher Browser Ihre Seite rendert, sondern stattdessen prüfen, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Wenn nicht, verwenden Sie einen Fallback. In den seltenen Fällen, in denen sich das Verhalten zwischen den Browsern unterscheidet, sollten Sie statt der Überprüfung der User-Agent-Zeichenfolge einen Test implementieren, um zu erkennen, wie der Browser die API implementiert, und zu bestimmen, wie Sie sie aus diesem Grund verwenden können. Ein Beispiel für die Funktionserkennung ist wie folgt. Im Jahr 2017 [deaktivierte Chrome experimentelle Lookbehind-Unterstützung in regulären Ausdrücken](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte es. Sie könnten sich gedacht haben, dies zu tun:

```js
// This code snippet splits a string in a special notation
let splitUpString;
if (navigator.userAgent.includes("Chrome")) {
  // YES! The user is suspected to support look-behind regexps
  // DO NOT USE /(?<=[A-Z])/. It will cause a syntax error in
  // browsers that do not support look-behind expressions
  // because all browsers parse the entire script, including
  // sections of the code that are never executed.
  const camelCaseExpression = new RegExp("(?<=[A-Z])");
  splitUpString = (str) => String(str).split(camelCaseExpression);
} else {
  // This fallback code is much less performant, but works
  splitUpString = (str) =>
    String(str)
      .split(/(.*?[A-Z])/)
      .filter(Boolean);
}

console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

Der obige Code hätte mehrere falsche Annahmen getroffen:
Erstens wird angenommen, dass alle User-Agent-Zeichenfolgen, die die Teilzeichenfolge „Chrome“ enthalten, Chrome sind. UA-Zeichenfolgen sind notorisch irreführend.
Dann wurde angenommen, dass die Lookbehind-Funktion immer verfügbar wäre, wenn der Browser Chrome wäre. Es könnte sich um eine ältere Version von Chrome handeln, bevor die Unterstützung hinzugefügt wurde, oder (weil die Funktion experimentell war) es könnte sich um eine spätere Version von Chrome handeln, die sie entfernt hat.
Am wichtigsten, es wurde angenommen, dass keine anderen Browser die Funktion unterstützen würden. Die Unterstützung hätte jederzeit zu anderen Browsern hinzugefügt werden können, aber dieser Code hätte weiterhin den schlechteren Weg gewählt.

Probleme wie diese können vermieden werden, indem man die Unterstützung der Funktion selbst testet:

```js
let isLookBehindSupported = false;

try {
  new RegExp("(?<=)");
  isLookBehindSupported = true;
} catch (err) {
  // If the agent doesn't support look behinds, the attempted
  // creation of a RegExp object using that syntax throws and
  // isLookBehindSupported remains false.
}

const splitUpString = isLookBehindSupported
  ? (str) => String(str).split(new RegExp("(?<=[A-Z])"))
  : (str) =>
      String(str)
        .split(/(.*?[A-Z])/)
        .filter(Boolean);

console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browserunterstützung ohne User-Agent-Sniffing zu testen. Es gibt **nie** einen Grund, die User-Agent-Zeichenfolge hierfür zu überprüfen.

Zuletzt bringen die obigen Codebeispiele ein kritisches Problem mit dem cross-browser Codieren mit sich, das immer berücksichtigt werden muss. Verwenden Sie nicht versehentlich die API, die Sie in nicht unterstützten Browsern testen. Dies mag offensichtlich und einfach klingen, ist es aber manchmal nicht. Zum Beispiel wird im obigen Codebeispiel die Verwendung von Lookbehind in Kurz-Regex-Notation (z.B. `/reg/igm`) in nicht unterstützten Browsern zu einem Parserfehler führen. Daher würden Sie im obigen Beispiel `new RegExp("(<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` verwenden, selbst im Lookbehind-unterstützten Abschnitt Ihres Codes.

- Progressive Verbesserung
  - : Diese Gestaltungstechnik umfasst die Entwicklung Ihrer Website in „Schichten“ mit einem Bottom-up-Ansatz, beginnend mit einer einfacheren Schicht und Verbesserung der Site-Funktionen in aufeinanderfolgenden Schichten, die jeweils mehr Funktionen verwenden.
- Angemessene Verschlechterung
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Site mit allen gewünschten Funktionen erstellen und dann anpassen, um sie auf älteren Browsern lauffähig zu machen. Dies kann schwieriger und weniger effektiv sein als progressive Verbesserung, kann jedoch in einigen Fällen nützlich sein.
- Erkennung mobiler Geräte

  - : Vielleicht der häufigste Gebrauch und Missbrauch von User-Agent-Sniffing ist es, zu erkennen, ob das Gerät ein mobiles Gerät ist. Allerdings übersehen die Leute oft, wonach sie wirklich suchen. Die Leute verwenden User-Agent-Sniffing, um festzustellen, ob das Gerät der Benutzer touchscreenfreundlich ist und einen kleinen Bildschirm hat, damit sie ihre Website entsprechend optimieren können. Während User-Agent-Sniffing dies manchmal erkennen kann, sind nicht alle Geräte gleich: Einige mobile Geräte haben große Bildschirme; andere Desktops haben einen Touchscreen; einige Leute nutzen Smart-TVs, die eine ganz andere Herausforderung darstellen; und einige Menschen können die Breite und Höhe ihres Bildschirms dynamisch ändern, indem sie ihr Tablet zur Seite drehen! User-Agent-Sniffing ist definitiv nicht der Weg, um diese Herausforderung anzugehen. Glücklicherweise gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) um zu erkennen, ob das Gerät des Nutzers einen Touchscreen hat. Dann greifen Sie zurück zur Überprüfung der User-Agent-Anzeige nur `if (!("maxTouchPoints" in navigator)) { /* Code hier */ }`. Mit dieser Information darüber, ob das Gerät einen Touchscreen hat, ändern Sie nicht das gesamte Layout der Website nur für Touchgeräte: Sie würden nur mehr Arbeit und Wartung für sich selbst schaffen. Fügen Sie stattdessen Touch-Annehmlichkeiten hinzu, wie größere, leichter klickbare Schaltflächen (dies können Sie mithilfe von CSS durch Vergrößerung der Schriftgröße tun). Hier ist ein Beispielcode, der das Padding von `#exampleButton` auf `1em` auf mobilen Geräten erhöht.

```js
let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ("orientation" in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    const UA = navigator.userAgent;
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
  }
}

if (hasTouchScreen) {
  document.getElementById("exampleButton").style.padding = "1em";
}
```

In Bezug auf die Bildschirmgröße verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Bildschirmgrößenabhängige Dinge aktualisieren */ })`. Sie sollten nicht Informationen auf kleineren Bildschirmen streichen. Das wird die Leute nur ärgern, weil es sie zwingt, die Desktop-Version zu verwenden. Versuchen Sie stattdessen, weniger Spalten von Informationen auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie mehr Spalten mit einer kürzeren Seite auf größeren Bildschirmen haben. Dieser Effekt kann leicht mit CSS [Flexboxen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), manchmal mit [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats) als teilweise Rückfallebene, erreicht werden.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und den Inhalt der Seite sinnvoll zusammenzufassen. Obwohl es nicht zum Thema gehört, könnte Ihnen das folgende detaillierte Beispiel Einblicke und Ideen geben, die Sie dazu bringen, auf User-Agent-Sniffing zu verzichten. Stellen Sie sich eine Seite vor, die aus Informationsboxen besteht; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, eine Übersicht und eine historische interessante Tatsache. Die Bilder werden selbst auf großen Bildschirmen in einer maximal angemessenen Größe gehalten. Um den Inhalt sinnvoll zu gruppieren, sind alle Katzenboxen von allen Hundeboxen getrennt, sodass die Katzen- und Hundeboxen nicht miteinander vermischt sind. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den Platz, der links und rechts von den Bildern verschwendet wird, zu reduzieren. Die Boxen können auf zwei gleich faire Weisen in mehrere Spalten unterteilt werden. Von diesem Punkt an werden wir davon ausgehen, dass alle die Hundeboxen am Anfang des Quellcodes stehen, dass alle Katzenboxen am Ende des Quellcodes stehen und dass all diese Boxen dasselbe übergeordnete Element haben. Natürlich befindet sich eine einzige Instanz einer Hundebox direkt über einer Katzenbox. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um den Inhalt so zu gruppieren, dass alle Hundeboxen am oberen Rand der Seite und alle Katzenboxen weiter unten auf der Seite angezeigt werden, wenn die Seite den Endbenutzern angezeigt wird. Die zweite Methode verwendet ein [Spalten-Layout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) und ordnet alle Hunde links und alle Katzen rechts an. Nur in diesem speziellen Szenario ist es angebracht, keinen Rückfall für die Flexbox/Mehrspalten-Layouts bereitzustellen, was in sehr breiten Boxen in nur einer Spalte in alten Browsern resultiert. Überlegen Sie auch Folgendes. Wenn mehr Menschen die Webseite besuchen, um die Katzen zu sehen, dann könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, damit mehr Menschen das, was sie suchen, schneller auf kleineren Bildschirmen finden können, wo der Inhalt auf eine Spalte reduziert wird.

Machen Sie als nächstes Ihren Code immer dynamisch.
Der Benutzer kann sein mobiles Gerät zur Seite drehen und dadurch die Breite und Höhe der Seite ändern.
Oder es gibt möglicherweise in der Zukunft ein merkwürdiges Flip-Handy-ähnliches Gerät, bei dem das Aufklappen den Bildschirm erweitert.
Seien Sie nicht der Entwickler, der sich mit Kopfschmerzen herumschlägt, wie man mit dem Flip-Handy-ähnlichen Gerät umgeht.
Seien Sie niemals zufrieden mit Ihrer Webseite, bis Sie das Dev-Tools-Seitenpanel öffnen und den Bildschirm in der Größe ändern können, während die Webseite glatt, flüssig und dynamisch in der Größe angepasst aussieht.
Der einfachste Weg, dies zu tun, ist, den gesamten Code, der Inhalte basierend auf der Bildschirmgröße verschiebt, in eine einzelne Funktion zu trennen, die bei Seitenaufrufen und bei jedem [Resize-Event](/de/docs/Web/API/Window/resize_event) danach aufgerufen wird. Wenn viel durch diese Layout-Funktion berechnet wird, bevor das neue Layout der Seite festgelegt wird, dann überlegen Sie, ob Sie das Eventlistener {{Glossary("debounce", "debouncing")}}, damit es nicht so oft aufgerufen wird.
Notieren Sie sich auch, dass ein großer Unterschied zwischen den Media Queries `(max-width: 25em)`, `not all and (min-width: 25em)`, und `(max-width: 24.99em)` besteht: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einschließt.
`(max-width: 24.99em)` ist eine billige Version von `not all and (min-width: 25em)`: Verwenden Sie `(max-width: 24.99em)` nicht, weil das Layout möglicherweise bei sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten in Zukunft kaputt geht.
Seien Sie immer sehr darauf bedacht, die richtige Media Query und den richtigen `>=`, `<=`, `>`, oder `<` in jedem entsprechenden JavaScript auszuwählen, da es sehr leicht ist, diese zu verwechseln, was dazu führt, dass die Website bei der Bildschirmgröße, bei der sich das Layout ändert, eigenartig aussieht.
Daher testen Sie die Website gründlich bei den genauen Breiten/Höhen, bei denen Layoutänderungen auftreten, um sicherzustellen, dass die Layoutänderungen richtig auftreten.

## Das Beste aus User-Agent-Sniffing machen

Nach der Überprüfung aller oben genannten besseren Alternativen zu User-Agent-Sniffing gibt es immer noch einige potenzielle Fälle, in denen User-Agent-Sniffing angemessen und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung von User-Agent-Sniffing als Fallback beim Erkennen, ob das Gerät ein Touchscreen hat. Siehe den Abschnitt [Erkennung mobiler Geräte](#Erkennung_mobiler_Geräte) für weitere Informationen.

Ein weiterer solcher Fall ist die Behebung von Fehlern in Browsern, die sich nicht automatisch aktualisieren. WebKit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS intern WebKit zu verwenden, sodass der Benutzer keine Möglichkeit hat, einen besseren, aktuelleren Browser auf älteren Geräten zu bekommen. Die meisten Fehler können erkannt werden, aber einige Fehler erfordern mehr Aufwand, um erkannt zu werden als andere. In solchen Fällen könnte es vorteilhaft sein, User-Agent-Sniffing zu verwenden, um bei der Leistung zu sparen. Zum Beispiel hat WebKit 6 einen Fehler, wobei der Browser möglicherweise keine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Listener auslöst, wenn dies der Fall sein sollte, wenn sich die Geräteausrichtung ändert. Um diesen Fehler zu beheben, beachten Sie den untenstehenden Code.

```js
const UA = navigator.userAgent;
const isWebkit =
  /\b(iPad|iPhone|iPod)\b/.test(UA) &&
  /WebKit/.test(UA) &&
  !/Edge/.test(UA) &&
  !window.MSStream;

let mediaQueryUpdated = true;
const mqL = [];

function whenMediaChanges() {
  mediaQueryUpdated = true;
}

const listenToMediaQuery = isWebkit
  ? (mQ, f) => {
      if (/height|width/.test(mQ.media)) {
        mqL.push([mQ, f]);
      }
      mQ.addListener(f);
      mQ.addListener(whenMediaChanges);
    }
  : () => {};

const destroyMediaQuery = isWebkit
  ? (mQ) => {
      for (let i = 0; i < mqL.length; i++) {
        if (mqL[i][0] === mQ) {
          mqL.splice(i, 1);
        }
      }
      mQ.removeListener(whenMediaChanges);
    }
  : listenToMediaQuery;

let orientationChanged = false;
addEventListener(
  "orientationchange",
  () => {
    orientationChanged = true;
  },
  PASSIVE_LISTENER_OPTION,
);

addEventListener("resize", () =>
  setTimeout(() => {
    if (orientationChanged && !mediaQueryUpdated) {
      for (let i = 0; i < mqL.length; i++) {
        mqL[i][1](mqL[i][0]);
      }
    }
    mediaQueryUpdated = orientationChanged = false;
  }, 0),
);
```

## Welcher Teil des User-Agents enthält die Information, die Sie suchen?

Da es keine Einheitlichkeit der verschiedenen Teile der User-Agent-Zeichenfolge gibt, ist dies der knifflige Teil.

### Browsername und Version

Wenn Menschen sagen, dass sie „Browsererkennung“ möchten, möchten sie oft tatsächlich „Rendering-Engine-Erkennung“. Möchten Sie tatsächlich Firefox erkennen, im Gegensatz zu SeaMonkey, oder Chrome im Gegensatz zu Chromium? Oder möchten Sie tatsächlich sehen, ob der Browser die Rendering-Engine Gecko oder WebKit verwendet? Wenn dies das ist, was Sie benötigen, siehe weiter unten.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Da der Name jedoch nicht die einzige Information in einer User-Agent-Zeichenfolge ist, die in diesem Format vorliegt, können Sie den Namen des Browsers nicht herausfinden, sondern nur prüfen, ob der gesuchte Name existiert. Beachten Sie jedoch, dass einige Browser lügen: Chrome zum Beispiel meldet sich sowohl als Chrome als auch als Safari. Um Safari zu erkennen, müssen Sie die Safari-Zeichenfolge und das Fehlen der Chrome-Zeichenfolge überprüfen, Chromium meldet sich oft ebenfalls als Chrome oder Seamonkey meldet sich manchmal als Firefox.

Achten Sie auch darauf, keine einfache Regular-Expression auf den BrowserName zu verwenden, User-Agents enthalten auch Zeichenfolgen außerhalb der Keyword/Wert-Syntax. Safari & Chrome enthalten zum Beispiel die Zeichenfolge 'like Gecko'.

| Browsername                      | Muss enthalten  | Darf nicht enthalten             |
| -------------------------------- | --------------- | -------------------------------- |
| Firefox                          | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                        | `Seamonkey/xyz` |                                  |
| Chrome                           | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                         | `Chromium/xyz`  |                                  |
| Safari                           | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (basierend auf Blink)  | `OPR/xyz`       |                                  |
| Opera 12- (basierend auf Presto) | `Opera/xyz`     |                                  |

\[1] Safari liefert zwei Versionsnummern: eine technische im `Safari/xyz` Token und eine benutzerfreundliche in einem `Version/xyz` Token.

Natürlich gibt es keine Garantie, dass ein anderer Browser einige dieser Dinge nicht übernimmt (wie Chrome in der Vergangenheit die Safari-Zeichenfolge übernommen hat). Deshalb ist die Browsererkennung mit der User-Agent-Zeichenfolge unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer erfolgen (die Übernahme vergangener Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits erwähnt, ist es in den meisten Fällen besser, die Rendering-Engine zu suchen. Dies hilft, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine teilen, werden eine Seite auf die gleiche Weise anzeigen: Es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive große Rendering-Engines: Blink, Gecko und WebKit. Da das Sniffing von Namen von Rendering-Engines üblich ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Es ist daher wichtig, darauf zu achten, keine Fehlalarme bei der Erkennung der Rendering-Engine auszulösen.

| Engine   | Muss enthalten    | Kommentar                                                                                                                                                                                                |
| -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                                          |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                                          |
| WebKit   | `AppleWebKit/xyz` | Achten Sie darauf, WebKit-Browser fügen eine 'like Gecko' Zeichenfolge hinzu, die beim Erkennen möglicherweise zu Fehlalarmen bei Gecko führt.                                                           |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink')                                                                                                         |
| EdgeHTML | `Edge/xyz`        | Die nicht-Chromium-Edge setzt seine Engine-Version nach dem _Edge/_ Token, nicht die Anwenderversion. Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink'). |

## Rendering-Engine-Version

Die meisten Rendering-Engines setzen die Versionsnummer im _RenderingEngine/VersionNumber_ Token, mit der bemerkenswerten Ausnahme von Gecko. Gecko setzt die Gecko-Versionsnummer im Kommentarbereich des User-Agents nach der `rv:` Zeichenfolge. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version setzt es diesen Wert auch im `Gecko/version` Token (frühere Versionen setzten dort das Build-Datum oder ein festes Datum, genannt die GeckoTrail).

## Betriebssystem

Das Betriebssystem wird in den meisten User-Agent-Zeichenfolgen angegeben (obwohl nicht auf das Web fokussierte Plattformen wie Firefox OS), aber das Format variiert stark. Es handelt sich um eine feste Zeichenfolge zwischen zwei Semikolons im Kommentarbereich des User-Agents. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das Betriebssystem an, oft jedoch auch dessen Version und Informationen über die zugrundeliegende Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).

Wie in allen Fällen, können sich diese Zeichenfolgen in Zukunft ändern, daher sollte man sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden. Eine technologische Beobachtung muss vorhanden sein, um das Script anzupassen, wenn neue Browserversionen auf den Markt kommen.

### Mobil, Tablet oder Desktop

Der häufigste Grund für User-Agent-Sniffing ist es, zu bestimmen, auf welchem Gerätetyp der Browser läuft. Ziel ist es, unterschiedlichen HTML-Code an verschiedene Gerätetypen zu liefern.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Erstellen Sie insbesondere keine unterschiedlichen Standardeinstellungen für verschiedene Browser oder Rendering-Engines.
- Verwenden Sie niemals das OS-Token, um zu bestimmen, ob ein Browser auf Mobil, Tablet oder Desktop läuft. Das Betriebssystem kann auf mehreren Gerätetypen laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browserhersteller anzeigen, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                              | Regel                                                    | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` innerhalb des Kommentars.         | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.          | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.          | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                           | `Opera Mobi/xyz` Token innerhalb des Kommentars.         | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Token außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammenfassend empfehlen wir, die Zeichenfolge `Mobi` überall im User-Agent zu suchen, um ein mobiles Gerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, um nicht mit `Mobi` gekennzeichnet zu sein, sollten Sie Ihre Desktop-Site bereitstellen (die, als Best Practice, sowieso Touch-Eingaben unterstützen sollte, da immer mehr Desktop-Maschinen mit Touchscreens erscheinen).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementierung der Funktionserkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
