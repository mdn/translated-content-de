---
title: Browser-Erkennung anhand des User-Agents
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{HTTPSidebar}}

Unterschiedliche Webseiten oder Dienste für verschiedene Browser zu liefern, ist in der Regel eine schlechte Idee. Das Web soll für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich je nach verfügbaren Funktionen schrittweise verbessert, anstatt sich an bestimmte Browser zu richten.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch einige Randfälle, in denen die Erkennung des Browsers erforderlich ist. Den Browser anhand des User-Agents zu erkennen, sieht einfach aus, ist aber tatsächlich ein sehr schwieriges Problem. Dieses Dokument wird Sie anleiten, dies so korrekt wie möglich zu tun.

> [!NOTE]
> Es lohnt sich, das noch einmal zu betonen: Es ist sehr selten eine gute Idee, User-Agent-Erkennung zu verwenden. Sie können fast immer eine bessere, breiter kompatible Lösung für Ihr Problem finden!

## Überlegungen vor der Verwendung von Browser-Erkennung

Wenn Sie in Erwägung ziehen, die User-Agent-Zeichenfolge zu verwenden, um zu erkennen, welcher Browser verwendet wird, sollten Sie zuerst versuchen, dies zu vermeiden, wenn möglich. Beginnen Sie damit, **warum** Sie es tun wollen, zu identifizieren.

- Versuchen Sie, einen bestimmten Fehler in einer Version eines Browsers zu umgehen?
  - : Suchen Sie in spezialisierten Foren oder fragen Sie dort nach: Es ist unwahrscheinlich, dass Sie der Erste sind, der auf dieses Problem stößt. Auch Experten oder Menschen mit einem anderen Blickwinkel können Ihnen Ideen geben, um den Fehler zu umgehen. Wenn das Problem ungewöhnlich erscheint, lohnt es sich zu prüfen, ob dieser Fehler dem Browser-Anbieter über ihr Bug-Tracking-System gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller beachten Fehlerberichte, und die Analyse kann Hinweise auf andere Umgehungen des Fehlers geben.
- Versuchen Sie, das Vorhandensein einer bestimmten Funktion zu überprüfen?
  - : Ihre Website muss eine bestimmte Web-Funktion verwenden, die einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer auf eine ältere Website mit weniger Funktionen weiterleiten, von der Sie wissen, dass sie funktioniert. Dies ist der schlechteste Grund, User-Agent-Erkennung zu verwenden, da früher oder später wahrscheinlich alle anderen Browser aufholen werden. Zudem ist es unpraktisch, jeden der weniger populären Browser zu testen und für diese Web-Funktionen zu prüfen. Sie sollten **niemals** User-Agent-Erkennung verwenden. Es gibt **immer** die Alternative der Funktionsüberprüfung.
- Möchten Sie je nach verwendetem Browser unterschiedlichen HTML-Code bereitstellen?
  - : Dies ist normalerweise eine schlechte Praxis, aber es gibt einige Fälle, in denen dies notwendig ist. In diesen Fällen sollten Sie zuerst Ihre Situation analysieren, um sicherzustellen, dass es wirklich notwendig ist. Können Sie es verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Elemente hinzufügen? Die Schwierigkeit, die User-Agent-Erkennung erfolgreich einzusetzen, ist ein paar Unterbrechungen der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder flüssige Layouts verwenden, um die Notwendigkeit, dies zu tun, zu verringern?

## Vermeidung der User-Agent-Erkennung

Wenn Sie die User-Agent-Erkennung vermeiden möchten, haben Sie Möglichkeiten!

- Funktionsüberprüfung

  - : Die Funktionsüberprüfung besteht darin, nicht zu versuchen herauszufinden, welcher Browser Ihre Seite rendert, sondern stattdessen zu prüfen, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Wenn nicht, verwenden Sie einen Fallback. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie anstelle der Überprüfung der User-Agent-Zeichenfolge einen Test implementieren, um zu erkennen, wie der Browser die API implementiert, und festzustellen, wie Sie sie verwenden können. Ein Beispiel für Funktionsüberprüfung ist folgendes. Im Jahr 2017 hat Chrome [experimentelle Lookbehind-Unterstützung in regulären Ausdrücken umgesetzt](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte es. Daher könnten Sie gedacht haben, dies zu tun:

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
Erstens wurde angenommen, dass alle User-Agent-Zeichenfolgen, die die Teilzeichenfolge "Chrome" enthalten, Chrome sind. UA-Zeichenfolgen sind notorisch irreführend.
Dann wurde angenommen, dass die Lookbehind-Funktion immer verfügbar wäre, wenn der Browser Chrome ist. Der Agent könnte eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder (da die Funktion zu der Zeit experimentell war) könnte es eine spätere Version von Chrome sein, die sie entfernt hat.
Am wichtigsten ist, dass davon ausgegangen wurde, dass keine anderen Browser die Funktion unterstützen würden. Unterstützung könnte jederzeit zu anderen Browsern hinzugefügt werden, aber dieser Code hätte weiterhin den minderwertigen Pfad gewählt.

Probleme wie diese können vermieden werden, indem die Unterstützung der Funktion selbst getestet wird:

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browser-Unterstützung ohne User-Agent-Erkennung zu testen. Es gibt **nie** einen Grund, die User-Agent-Zeichenfolge hierfür zu überprüfen.

Zuletzt bringen die obigen Code-Snippets ein kritisches Problem beim plattformübergreifenden Codieren mit sich, das immer berücksichtigt werden muss. Verwenden Sie nicht versehentlich die API, die Sie in nicht unterstützten Browsern testen. Das mag offensichtlich und einfach erscheinen, ist es aber manchmal nicht. Zum Beispiel wird in den obigen Code-Snippets die Verwendung von Lookbehind in Kurzregex-Notation (zum Beispiel `/reg/igm`) einen Parser-Fehler in nicht unterstützten Browsern verursachen. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` statt `/(?<=look_behind_stuff)/` verwenden, sogar im Lookbehind-unterstützten Abschnitt Ihres Codes.

- Progressive Enhancement
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in "Schichten" unter Verwendung eines Bottom-up-Ansatzes, beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinanderfolgenden Schichten, die jeweils mehr Funktionen verwenden.
- Graceful Degradation
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Website erstellen, indem Sie alle Funktionen verwenden, die Sie möchten, und sie dann anpassen, damit sie in älteren Browsern funktioniert. Dies kann schwieriger sein und weniger effektiv als Progressive Enhancement, aber in manchen Fällen nützlich sein.
- Mobile-Geräte-Erkennung

  - : Vielleicht der häufigste Einsatz und Missbrauch der User-Agent-Erkennung ist die Erkennung, ob das Gerät ein Mobilgerät ist. Leider übersehen die Leute zu oft, wonach sie eigentlich suchen. Leute verwenden User-Agent-Erkennung, um zu erkennen, ob das Gerät des Benutzers touch-freundlich ist und einen kleinen Bildschirm hat, damit sie ihre Website entsprechend optimieren können. Während die User-Agent-Erkennung dies manchmal erkennen kann, sind nicht alle Geräte gleich: Einige Mobilgeräte haben große Bildschirmgrößen, einige Desktops haben einen kleinen Touchscreen, einige Leute verwenden Smart TVs, die ein ganz anderes Spiel sind, und einige Leute können die Breite und Höhe ihres Bildschirms dynamisch ändern, indem sie ihr Tablet auf die Seite kippen! Deshalb ist die User-Agent-Erkennung definitiv nicht der richtige Weg. Glücklicherweise gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints), um zu erkennen, ob das Gerät des Benutzers einen Touchscreen hat. Dann kehren Sie zurück, um den User-Agent-Bildschirm nur zu überprüfen `if (!("maxTouchPoints" in navigator)) { /* Code here */ }`. Mit dieser Information darüber, ob das Gerät einen Touchscreen hat, ändern Sie nicht das gesamte Layout der Website nur für Touch-Geräte: Sie werden sich nur mehr Arbeit und Wartung schaffen. Fügen Sie stattdessen Touch-Annehmlichkeiten wie größere, leichter klickbare Schaltflächen hinzu (Sie können dies mit CSS tun, indem Sie die Schriftgröße erhöhen). Hier ist ein Beispielcode, der das Padding von `#exampleButton` auf `1em` auf Mobilgeräten erhöht.

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

In Bezug auf die Bildschirmgröße verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Refresh screen size dependent things */ })`. Was Sie für die Bildschirmgröße tun möchten, ist, keine Informationen auf kleineren Bildschirmen abzuschneiden. Das wird die Leute nur ärgern, weil es sie zwingen wird, die Desktop-Version zu verwenden. Versuchen Sie stattdessen, weniger Informationsspalten auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie mehr Spalten mit einer kürzeren Seite auf größeren Bildschirmen haben. Dieser Effekt kann leicht mit CSS [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox) erreicht werden, manchmal mit [Floats](/de/docs/Learn/CSS/CSS_layout/Floats) als teilweises Fallback.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und die Inhalte der Seite sinnvoll zu gruppieren. Obwohl es nicht zum Thema gehört, könnte Ihnen das folgende detaillierte Beispiel Einblicke und Ideen geben, die Sie dazu veranlassen, auf User-Agent-Erkennung zu verzichten. Stellen Sie sich eine Seite vor, die aus Informationsboxen besteht; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, einen Überblick und eine historische interessante Tatsache. Die Bilder werden auf eine maximale vernünftige Größe selbst auf großen Bildschirmen gehalten. Zum Zwecke der sinnvollen Gruppierung des Inhalts sind alle Katzenboxen von allen Hundeboxen getrennt, so dass die Katzen- und Hundeboxen nicht miteinander vermischt werden. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den verschwendeten Platz links und rechts von den Bildern zu reduzieren. Die Boxen können auf zwei gleichermaßen fairen Wegen in mehrere Spalten aufgeteilt werden. Von diesem Punkt an nehmen wir an, dass alle Hundeboxen am oberen Rand des Quellcodes stehen, dass alle Katzenboxen am unteren Rand des Quellcodes stehen und dass all diese Boxen dasselbe übergeordnete Element haben. Es gibt natürlich eine einzelne Hundebox direkt über einer Katzenbox. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox), um den Inhalt so zu gruppieren, dass beim Anzeigen der Seite dem Endbenutzer alle Hundeboxen am oberen Rand der Seite und alle Katzenboxen weiter unten auf der Seite sind. Die zweite Methode verwendet ein [Spaltenlayout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) und platziert alle Hunde links und alle Katzen rechts. Nur in diesem speziellen Szenario ist es angemessen, kein Fallback für die Flexboxen/Mehrspalten zu bieten, was zu einer einzigen Spalte sehr breiter Boxen in alten Browsern führt. Ziehen Sie auch das Folgende in Betracht. Wenn mehr Menschen die Webseite besuchen, um die Katzen zu sehen, dann könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, damit mehr Menschen schneller finden, wonach sie auf kleineren Bildschirmen suchen, auf denen der Inhalt auf eine Spalte zusammenbricht.

Machen Sie Ihren Code immer dynamisch.
Der Benutzer kann sein mobiles Gerät auf die Seite kippen und die Breite und Höhe der Seite ändern.
Es könnte auch in Zukunft ein seltsames Flip-Phone-ähnliches Gerät geben, bei dem das Aufklappen den Bildschirm erweitert.
Seien Sie nicht der Entwickler, der Kopfschmerzen darüber hat, mit dem Flip-Phone-ähnlichen Gerät umzugehen.
Seien Sie niemals zufrieden mit Ihrer Webseite, bis Sie das Dev-Tools-Seitenpanel öffnen und den Bildschirm so ändern können, dass die Webseite glatt, flüssig und dynamisch geändert aussieht.
Der einfachste Weg, dies zu tun, besteht darin, den gesamten Code, der den Inhalt je nach Bildschirmgröße verschiebt, in eine einzige Funktion zu trennen, die beim Laden der Seite aufgerufen wird und bei jedem [Resize](/de/docs/Web/API/Window/resize_event)-Ereignis danach. Wenn diese Layout-Funktion vor der Bestimmung des neuen Layouts der Seite viel berechnet, dann sollten Sie das Ereignis-Listener-Event entsprechend {{glossary("debounce", "debouncing")}}, damit es nicht so oft aufgerufen wird.
Beachten Sie auch, dass es einen erheblichen Unterschied zwischen den Media-Queries `(max-width: 25em)`, `not all and (min-width: 25em)` und `(max-width: 24.99em)` gibt: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einschließt.
`(max-width: 24.99em)` ist eine schlechte Version von `not all and (min-width: 25em)`: Verwenden Sie nicht `(max-width: 24.99em)`, da das Layout in Zukunft bei sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten möglicherweise kaputtgehen könnte.
Seien Sie immer sehr absichtlich beim Auswählen der richtigen Media-Query und bei der Auswahl des richtigen `>=`, `<=`, `>` oder `<` in jedem entsprechenden JavaScript, da es sehr einfach ist, sich hierbei zu vertun, was dazu führt, dass die Webseite genau an der Bildschirmgröße, bei der sich das Layout ändert, verrückt aussieht.
Testen Sie also die Webseite gründlich bei den genauen Breiten/Höhen, bei denen sich Layout-Änderungen ergeben, um sicherzustellen, dass die Layout-Änderungen ordnungsgemäß erfolgen.

## Das Beste aus der User-Agent-Erkennung herausholen

Nach der Durchsicht all dieser besseren Alternativen zur User-Agent-Erkennung gibt es immer noch einige potenzielle Fälle, in denen die User-Agent-Erkennung angemessen und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung der User-Agent-Erkennung als Fallback, wenn geprüft werden soll, ob das Gerät einen Touchscreen hat. Siehe den Abschnitt [Mobile-Geräte-Erkennung](#mobile_device_detection) für weitere Informationen.

Ein weiterer solcher Fall ist die Behebung von Fehlern in Browsern, die nicht automatisch aktualisiert werden. Webkit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS, intern Webkit zu verwenden, sodass der Benutzer keine bessere, aktuellere Version eines Browsers auf älteren Geräten bekommen kann. Die meisten Fehler können erkannt werden, aber einige Fehler erfordern mehr Aufwand zum Erkennen als andere. In solchen Fällen kann es vorteilhaft sein, die User-Agent-Erkennung zu verwenden, um an Leistung zu sparen. Zum Beispiel hat Webkit 6 einen Fehler, bei dem, wenn die Geräteausrichtung geändert wird, der Browser möglicherweise keine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Listener abfeuert, wie er sollte. Um diesen Fehler zu überwinden, betrachten Sie den folgenden Code.

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

## Welcher Teil des User-Agents enthält die gesuchten Informationen?

Da es keine Einheitlichkeit bei den verschiedenen Teilen der User-Agent-Zeichenfolge gibt, ist dies der knifflige Teil.

### Browser-Name und Version

Wenn Leute sagen, dass sie "Browser-Erkennung" wollen, wollen sie oft tatsächlich "Rendering-Engine-Erkennung". Wollen Sie wirklich Firefox erkennen, im Gegensatz zu SeaMonkey, oder Chrome im Gegensatz zu Chromium? Oder wollen Sie eigentlich sehen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies das ist, was Sie brauchen, sehen Sie weiter unten auf der Seite.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Da der Name jedoch nicht die einzige Information in einer User-Agent-Zeichenfolge ist, die in diesem Format vorliegt, können Sie nicht den Namen des Browsers entdecken, sondern nur prüfen, ob der Name, den Sie suchen, vorhanden ist. Beachten Sie jedoch, dass einige Browser lügen: Chrome beispielsweise gibt sich sowohl als Chrome als auch als Safari aus. Um Safari zu erkennen, müssen Sie nach der Safari-Zeichenkette und dem Fehlen der Chrome-Zeichenkette suchen; Chromium gibt sich oft auch als Chrome aus oder Seamonkey gibt sich manchmal als Firefox aus.

Achten Sie auch darauf, keinen einfachen regulären Ausdruck auf den BrowserName anzuwenden, da User-Agents auch Zeichenfolgen außerhalb der Keyword/Value-Syntax enthalten. Safari & Chrome enthalten zum Beispiel die Zeichenfolge 'like Gecko'.

| Browser-Name                    | Muss enthalten   | Darf nicht enthalten               |
| ------------------------------- | --------------- | ------------------------------ |
| Firefox                         | `Firefox/xyz`   | `Seamonkey/xyz`                |
| Seamonkey                       | `Seamonkey/xyz` |                                |
| Chrome                          | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                        | `Chromium/xyz`  |                                |
| Safari                          | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                |

\[1] Safari gibt zwei Versionsnummern an: eine technische im Token `Safari/xyz` und eine benutzerfreundliche im Token `Version/xyz`.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser nicht einige dieser Dinge kapert (wie Chrome in der Vergangenheit sogar die Safari-Zeichenfolge annektiert hat). Deshalb ist die Browser-Detektion anhand der User-Agent-Zeichenfolge unzuverlässig und sollte nur mit Überprüfung der Versionsnummer erfolgen (das Kapern von früheren Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits erwähnt, ist es in den meisten Fällen besser, nach der Rendering-Engine zu suchen. Dies hilft, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine teilen, werden eine Seite auf die gleiche Weise anzeigen: Es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive Haupt-Rendering-Engines: Blink, Gecko und WebKit. Da das Erkennen von Rendering-Engine-Namen gängig ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Es ist daher wichtig, darauf zu achten, keine Fehlalarme auszulösen, wenn die Rendering-Engine erkannt wird.

| Engine   | Muss enthalten      | Kommentar                                                                                                                                                                                      |
| -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                              |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                              |
| WebKit   | `AppleWebKit/xyz` | Achtung, WebKit-Browser fügen eine 'like Gecko'-Zeichenfolge hinzu, die bei unvorsichtiger Erkennung falsche positive Ergebnisse für Gecko auslösen kann.                                                          |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                                                                       |
| EdgeHTML | `Edge/xyz`        | Die nicht-Chromium-Version von Edge gibt ihre Engine-Version nach dem _Edge/_-Token an, nicht die Anwendungs-Version. Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink'). |

## Rendering-Engine-Version

Die meisten Rendering-Engines geben die Versionsnummer im _RenderingEngine/VersionNumber_-Token an, mit der bemerkenswerten Ausnahme von Gecko. Gecko gibt die Gecko-Versionsnummer im Kommentar-Teil des User-Agents nach der `rv:`-Zeichenfolge an. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version setzt es diesen Wert auch im `Gecko/version`-Token (vorherige Version setzen dort das Erstellungsdatum, dann ein festes Datum namens GeckoTrail).

## Betriebssystem

Das Betriebssystem wird in den meisten User-Agent-Zeichenfolgen angegeben (obwohl nicht bei web-fokussierten Plattformen wie Firefox OS), aber das Format variiert stark. Es handelt sich um eine feste Zeichenfolge zwischen zwei Semikolons im Kommentar-Teil des User-Agents. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das OS an, aber oft auch dessen Version und Informationen zur zugrundeliegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).

Wie in allen Fällen können sich diese Zeichenfolgen in Zukunft ändern; man sollte sie nur in Kombination mit der Erkennung bereits veröffentlichter Browser verwenden. Eine technologische Überwachung muss eingerichtet sein, um das Skript anzupassen, wenn neue Browser-Versionen herauskommen.

### Mobilgerät, Tablet oder Desktop

Der häufigste Grund für die Durchführung der User-Agent-Erkennung ist festzustellen, auf welchem Gerätetyp der Browser läuft. Das Ziel ist es, unterschiedlichen HTML-Code an verschiedene Gerätetypen zu liefern.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Machen Sie vor allem keine unterschiedlichen Voreinstellungen für unterschiedliche Browser oder Rendering-Engines.
- Verwenden Sie niemals das OS-Token, um festzulegen, ob ein Browser auf einem Mobilgerät, einem Tablet oder einem Desktop läuft. Das OS kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browser-Anbieter angeben, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                           | Regel                                                 | Beispiel                                                                                                                                                          |
| ----------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                          | `Mobile` oder `Tablet` innerhalb des Kommentars.             | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                  | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                        | `Opera Mobi/xyz`-Token innerhalb des Kommentars.           | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                        | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammenfassend empfehlen wir, nach der Zeichenfolge `Mobi` irgendwo im User-Agent zu suchen, um ein Mobilgerät zu erkennen.

> [!NOTE]
> Ist das Gerät groß genug, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Website bereitstellen (die als Best Practice ohnehin Touchscreen-Eingaben unterstützen sollte, da immer mehr Desktops mit Touchscreens ausgestattet werden).
