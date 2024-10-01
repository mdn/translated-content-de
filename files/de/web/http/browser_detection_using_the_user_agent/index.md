---
title: Browser-Erkennung mittels User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{HTTPSidebar}}

Das Bereitstellen unterschiedlicher Webseiten oder Dienste für verschiedene Browser ist in der Regel keine gute Idee. Das Web sollte für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich basierend auf der Verfügbarkeit von Funktionen progressiv verbessert, anstatt gezielt auf bestimmte Browser abzustimmen.

Doch Browser und Standards sind nicht perfekt, und es gibt immer noch einige Randfälle, in denen die Erkennung des Browsers erforderlich ist. Die Verwendung des User-Agents zur Erkennung des Browsers scheint einfach zu sein, doch ist sie in der Praxis ein sehr schwieriges Problem. Dieses Dokument wird Sie anleiten, dies so korrekt wie möglich zu tun.

> [!NOTE]
> Es ist wichtig, noch einmal zu betonen: Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden. Sie können fast immer eine bessere und breiter kompatible Methode finden, um Ihr Problem zu lösen!

## Überlegungen vor der Verwendung von Browser-Erkennung

Wenn Sie erwägen, die User-Agent-Zeichenkette zur Erkennung des verwendeten Browsers zu verwenden, ist Ihr erster Schritt, dies nach Möglichkeit zu vermeiden. Beginnen Sie damit, zu versuchen, **warum** Sie dies tun möchten.

- Versuchen Sie, einen bestimmten Fehler in einer Version eines Browsers zu umgehen?
  - : Suchen Sie in spezialisierten Foren oder stellen Sie Fragen dort: Sie sind wahrscheinlich nicht der Erste, der auf dieses Problem stößt. Auch Experten oder Menschen mit einer anderen Perspektive können Ihnen Ideen zur Fehlerumgehung geben. Wenn das Problem ungewöhnlich scheint, lohnt es sich, zu überprüfen, ob dieser Fehler bereits dem Browser-Hersteller über ihr Fehlerverfolgungssystem gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller achten auf Fehlerberichte, und die Analyse kann Hinweise auf andere Umgehungsmöglichkeiten für den Fehler geben.
- Wollen Sie das Vorhandensein einer bestimmten Funktion überprüfen?
  - : Ihre Website muss eine bestimmte Webfunktion nutzen, die einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer auf eine ältere Website mit weniger Funktionen umleiten, bei der Sie wissen, dass sie funktionieren wird. Dies ist der schlechteste Grund, um User-Agent-Erkennung zu verwenden, denn es ist sehr wahrscheinlich, dass alle anderen Browser irgendwann nachziehen werden. Darüber hinaus ist es nicht praktikabel, jeden der weniger populären Browser zu testen und die Webfunktionen zu prüfen. Sie sollten **niemals** User-Agent-Sniffing durchführen. Es gibt **immer** die Alternative, stattdessen Funktionserkennung zu verwenden.
- Möchten Sie je nach verwendetem Browser unterschiedlichen HTML bereitstellen?
  - : Dies ist normalerweise eine schlechte Praxis, aber es gibt einige Fälle, in denen dies notwendig ist. In diesen Fällen sollten Sie zuerst Ihre Situation analysieren, um sicherzugehen, dass es wirklich notwendig ist. Können Sie dies verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Elemente hinzufügen? Die Schwierigkeit, User-Agent-Erkennung erfolgreich zu verwenden, ist ein paar Störungen in der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder fließende Layouts nutzen, um die Notwendigkeit dafür zu beseitigen?

## Vermeiden von User-Agent-Erkennung

Wenn Sie die Verwendung von User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Feature-Erkennung

  - : Bei der Feature-Erkennung versuchen Sie nicht herauszufinden, welcher Browser Ihre Seite rendert, sondern prüfen, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Falls nicht, verwenden Sie einen Rückfall. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie stattdessen einen Test implementieren, um zu erkennen, wie der Browser die API implementiert und wie Sie sie dann nutzen können. Ein Beispiel für Feature-Erkennung wäre folgendes. Im Jahr 2017 hat Chrome [experimentelle Lookbehind-Unterstützung in regulären Ausdrücken entfernt](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützt sie. Sie hätten vielleicht gedacht, dies zu tun:

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

Der obige Code hätte mehrere falsche Annahmen gemacht:
Erstens ging er davon aus, dass alle User-Agent-Zeichenfolgen, die das Substring "Chrome" enthalten, Chrome sind. UA-Zeichenfolgen sind notorisch irreführend.
Dann nahm er an, dass die Lookbehind-Funktion immer verfügbar wäre, wenn der Browser Chrome wäre. Der Agent könnte eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder (da die Funktion zu der Zeit experimentell war) eine spätere Version von Chrome könnte sie entfernt haben.
Am wichtigsten ist, dass er annahm, dass keine anderen Browser die Funktion unterstützen würden. Die Unterstützung könnte zu jeder Zeit zu anderen Browsern hinzugefügt worden sein, aber dieser Code hätte weiterhin den unterlegenen Weg gewählt.

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Unterstützung des Browsers zu testen, ohne User-Agent-Sniffing durchzuführen. Es gibt **niemals** einen Grund, die User-Agent-Zeichenkette für diesen Zweck zu überprüfen.

Schließlich bringen die obigen Codebeispiele ein kritisches Problem beim browserübergreifenden Codieren mit sich, das immer berücksichtigt werden muss. Verwenden Sie nicht unbeabsichtigt die API, die Sie in nicht unterstützten Browsern testen. Dies mag offensichtlich und einfach erscheinen, ist es aber manchmal nicht. Zum Beispiel wird bei den obigen Code-Beispielen die Verwendung von Lookbehind in der Kurznotation für reguläre Ausdrücke (z. B. `/reg/igm`) in nicht unterstützten Browsern einen Parser-Fehler verursachen. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` verwenden, selbst im Lookbehind-unterstützten Abschnitt Ihres Codes.

- Progressive Verbesserung
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in "Schichten", wobei ein Bottom-up-Ansatz gewählt wird und mit einer einfacheren Schicht begonnen wird, um die Fähigkeiten der Seite in aufeinanderfolgenden Schichten mit mehr Funktionen zu verbessern.
- Sorgfältiger Abbau
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Seite mit allen gewünschten Funktionen erstellen und sie dann so anpassen, dass sie auch auf älteren Browsern funktioniert. Dies kann schwieriger sein und weniger effektiv als progressive Verbesserung, kann jedoch in einigen Fällen nützlich sein.
- Erkennung von mobilen Geräten

  - : Möglicherweise der häufigste Gebrauch und Missbrauch von User-Agent-Sniffing ist die Erkennung, ob es sich beim Gerät um ein mobiles Gerät handelt. Allerdings übersehen die Leute oft, was sie wirklich erreichen möchten. Die Leute verwenden User-Agent-Sniffing, um herauszufinden, ob das Gerät des Benutzers touch-freundlich ist und einen kleinen Bildschirm hat, damit sie ihre Website entsprechend optimieren können. Obwohl User-Agent-Sniffing dies manchmal erkennen kann, sind nicht alle Geräte gleich: Einige mobile Geräte haben große Bildschirmgrößen, einige Desktops haben einen kleinen Touchscreen, einige Leute verwenden Smart-TVs, die ein ganz eigenes Thema sind, und einige Leute können die Breite und Höhe ihres Bildschirms dynamisch ändern, indem sie ihr Tablet zur Seite kippen! Also ist User-Agent-Sniffing definitiv nicht der richtige Weg. Zum Glück gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints), um zu erkennen, ob das Gerät des Benutzers einen Touchscreen hat. Kehren Sie dann nur dann zur Überprüfung des User-Agent-Bildschirms zurück, `if (!("maxTouchPoints" in navigator)) { /* Code hier */ }`. Verwenden Sie diese Informationen, um festzustellen, ob das Gerät einen Touchscreen hat. Ändern Sie nicht das gesamte Layout der Website nur für Touch-Geräte: Damit würden Sie sich nur mehr Arbeit und Wartung schaffen. Fügen Sie stattdessen Touch-Komfort wie größere, leichter klickbare Schaltflächen hinzu (Sie können dies mit CSS durch Erhöhen der Schriftgröße tun). Hier ist ein Beispiel für einen Code, der das Padding von `#exampleButton` auf `1em` auf mobilen Geräten erhöht.

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

Beim Thema Bildschirmgröße: Verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Bildschirmgrößenabhängige Dinge aktualisieren */ })`. Was Sie bei der Bildschirmgröße tun sollten, ist nicht, Informationen auf kleineren Bildschirmen abzuschneiden. Das würde die Menschen nur verärgern, da es sie dazu zwingen würde, die Desktop-Version zu verwenden. Versuchen Sie vielmehr, weniger Spalten Informationstext auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie mehr Spalten auf kürzeren Seiten für größere Bildschirmgrößen haben. Dieser Effekt kann leicht mit CSS [Flexboxes](/de/docs/Learn/CSS/CSS_layout/Flexbox) und manchmal mit [Floats](/de/docs/Learn/CSS/CSS_layout/Floats) als teilweiser Rückfall erreicht werden.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und die Inhalte der Seite sinnvoll zu gruppieren. Obwohl es nicht zum Thema gehört, könnte Ihnen das folgende detaillierte Beispiel Einsichten und Ideen geben, die Sie dazu bringen, auf User-Agent-Sniffing zu verzichten. Lassen Sie uns eine Seite mit Informationsboxen vorstellen; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, eine Übersicht und eine historische interessante Tatsache. Die Bilder werden selbst auf großen Bildschirmen auf eine maximal vernünftige Größe begrenzt. Um die Inhalte sinnvoll zu gruppieren, werden alle Katzenboxen von allen Hundeboxen getrennt, sodass die Katzen- und Hundeboxen nicht durcheinander geraten. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den Platz links und rechts von den Bildern zu reduzieren. Die Boxen können auf zwei gleichberechtigte Methoden in mehrere Spalten getrennt werden. Von diesem Punkt an nehmen wir an, dass alle Hundeboxen sich oben im Quellcode befinden, dass alle Katzenboxen sich unten im Quellcode befinden und dass alle diese Boxen dasselbe Elternelement haben. Es gibt natürlich eine einzige Instanz einer Hundebox unmittelbar über einer Katzenbox. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox), um den Inhalt so zu gruppieren, dass, wenn die Seite dem Endnutzer angezeigt wird, alle Hundeboxen oben auf der Seite und alle Katzenboxen weiter unten auf der Seite sind. Die zweite Methode verwendet ein [Column](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)-Layout und teilt alle Hunde links und alle Katzen rechts an. Nur in diesem speziellen Szenario ist es angebracht, für die Flexboxen/mehrspaltigen Spalten keinen Rückfall anzubieten, was auf alten Browsern zu einer einzelnen Spalte sehr breiter Boxen führt. Berücksichtigen Sie auch Folgendes: Wenn mehr Leute die Webseite besuchen, um die Katzen zu sehen, könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, sodass mehr Leute finden, wonach sie suchen, auf kleineren Bildschirmen, wo der Inhalt in eine Spalte kollabiert.

Machen Sie Ihren Code schließlich immer dynamisch.
Der Benutzer kann sein mobiles Gerät zur Seite drehen, um die Breite und Höhe der Seite zu ändern.
Oder es könnte in der Zukunft ein seltsames Flip-Phone-ähnliches Gerät geben, bei dem das Aufklappen den Bildschirm vergrößert.
Seien Sie nicht der Entwickler, der sich Gedanken darüber macht, wie er mit dem Flip-Phone-ähnlichen Gerät umgehen soll.
Seien Sie nie zufrieden mit Ihrer Webseite, bis Sie das Entwicklertools-Seitenfeld öffnen und den Bildschirm anpassen können, während die Webseite fließend, weich und dynamisch aussieht.
Der einfachste Weg, dies zu erreichen, besteht darin, den gesamten Code, der Inhalte basierend auf der Bildschirmgröße verschiebt, in eine einzelne Funktion zu trennen, die beim Laden der Seite und bei jedem [resize](/de/docs/Web/API/Window/resize_event)-Ereignis danach aufgerufen wird. Wenn in dieser Layoutfunktion viel berechnet wird, bevor sie das neue Layout der Seite bestimmt, sollten Sie das Debouncing für den Ereignis-Listener in Betracht ziehen, sodass er nicht so häufig wie nötig aufgerufen wird.
Beachten Sie auch, dass es einen großen Unterschied zwischen den Media-Queries `(max-width: 25em)`, `not all and (min-width: 25em)` und `(max-width: 24.99em)` gibt: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einschließt.
`(max-width: 24.99em)` ist eine primitive Version von `not all and (min-width: 25em)`: Verwenden Sie `(max-width: 24.99em)` nicht, da das Layout _möglicherweise_ bei sehr hohen Schriftgrößen auf Geräten mit sehr hohe Auflösung in der Zukunft brechen könnte.
Seien Sie immer sehr bewusst bei der Auswahl der richtigen Media-Query und der Wahl von `>=`, `<=`, `>`, oder `<` in jedem entsprechenden JavaScript, da es sehr einfach ist, diese zu verwechseln, was dazu führen kann, dass die Webseite genau bei der Bildschirmgröße, bei der das Layout wechselt, seltsam aussieht.
Testen Sie daher die Webseite gründlich bei den genauen Breiten/Höhen, bei denen Layoutwechsel auftreten, um sicherzustellen, dass die Layoutwechsel ordnungsgemäß erfolgen.

## Das Beste aus dem User-Agent-Sniffing machen

Nachdem Sie alle oben genannten besseren Alternativen zum User-Agent-Sniffing überprüft haben, gibt es immer noch einige potenzielle Fälle, in denen User-Agent-Sniffing angemessen und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung von User-Agent-Sniffing als Rückfallmethode zur Erkennung, ob das Gerät einen Touchscreen hat. Für weitere Informationen lesen Sie den Abschnitt: [Erkennung von mobilen Geräten](#mobile_device_detection).

Ein weiterer Fall ist das Beheben von Fehlern in Browsern, die nicht automatisch aktualisiert werden. Webkit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS, intern Webkit zu nutzen, sodass der Benutzer keine Möglichkeit hat, einen besseren, aktuelleren Browser auf älteren Geräten zu erhalten. Die meisten Fehler können erkannt werden, aber einige Fehler erfordern mehr Aufwand, um erkannt zu werden. In solchen Fällen kann es vorteilhaft sein, User-Agent-Sniffing zur Leistungssteigerung zu nutzen. Zum Beispiel hat Webkit 6 einen Fehler, bei dem das Gerät, wenn das Gerät die Ausrichtung ändert, möglicherweise keine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Listener auslöst, wenn es das sollte. Um diesen Fehler zu überwinden, betrachten Sie den folgenden Code.

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

## Welcher Teil des User-Agent enthält die gesuchte Information?

Da es keine Einheitlichkeit in den verschiedenen Teilen der User-Agent-Zeichenfolge gibt, ist dies der knifflige Teil.

### Browsername und Version

Wenn Leute sagen, sie wollen "Browser-Erkennung", wollen sie oft eigentlich "Rendering-Engine-Erkennung". Möchten Sie tatsächlich zwischen Firefox im Gegensatz zu SeaMonkey unterscheiden oder zwischen Chrome im Gegensatz zu Chromium? Oder wollen Sie tatsächlich überprüfen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies Ihr Bedürfnis ist, lesen Sie weiter unten auf der Seite.

Die meisten Browser setzen den Namen und die Version im Format _Browsername/Versionsnummer_. Doch da der Name nicht die einzige Information in einer User-Agent-Zeichenfolge ist, die in diesem Format vorliegt, können Sie den Namen des Browsers nicht herausfinden, Sie können nur überprüfen, ob der Name, den Sie suchen, vorhanden ist. Beachten Sie jedoch, dass einige Browser lügen: Chrome zum Beispiel berichtet sowohl als Chrome als auch als Safari. Um Safari zu erkennen, müssen Sie nach dem Safari-String und dem Fehlen des Chrome-Strings suchen. Chromium meldet sich oft auch als Chrome oder Seamonkey manchmal als Firefox.

Achten Sie auch darauf, keine einfachen regulären Ausdrücke auf den Browsername zu verwenden, User-Agents enthalten auch Zeichenfolgen außerhalb der Keyword/Value-Syntax. Safari & Chrome enthalten zum Beispiel die Zeichenfolge 'like Gecko'.

| Browsername                | Muss enthalten  | Darf nicht enthalten             |
| -------------------------- | --------------- | -------------------------------- |
| Firefox                    | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                  | `Seamonkey/xyz` |                                  |
| Chrome                     | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                   | `Chromium/xyz`  |                                  |
| Safari                     | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basiert)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basiert) | `Opera/xyz`     |                                  |

\[1] Safari gibt zwei Versionsnummern: eine technische im `Safari/xyz`-Token und eine benutzerfreundliche in einem `Version/xyz`-Token.

Natürlich gibt es absolut keine Garantie, dass kein anderer Browser einige dieser Dinge kapert (so wie Chrome in der Vergangenheit den Safari-String gekapert hat). Aus diesem Grund ist die Browsererkennung mit der User-Agent-Zeichenfolge unzuverlässig und sollte nur in Kombination mit der Überprüfung der Versionsnummer erfolgen (das Kapern vergangener Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits erwähnt, ist es in den meisten Fällen besser, nach der Rendering-Engine zu suchen. Dies hilft dabei, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine teilen, zeigen eine Seite auf dieselbe Weise an: Es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive wichtige Rendering-Engines: Blink, Gecko und WebKit. Da das Sniffing der Rendering-Engine-Namen üblich ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Es ist daher wichtig, darauf zu achten, keine Fehlalarme bei der Erkennung der Rendering-Engine auszulösen.

| Engine   | Muss enthalten    | Kommentar                                                                                                                                                                                                                |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                                                          |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                                                          |
| WebKit   | `AppleWebKit/xyz` | Achten Sie darauf, dass WebKit-Browser eine 'like Gecko'-Zeichenfolge hinzufügen können, die möglicherweise einen Fehlalarm für Gecko auslösen, wenn die Erkennung nicht vorsichtig ist.                                 |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browserversionen >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                                                                                      |
| EdgeHTML | `Edge/xyz`        | Der nicht-Chromium-Edge setzt die Versionsnummer seiner Engine nicht nach dem Token _Edge/_, sondern zur Anwendungsversion. Veraltet; EdgeHTML wird in Edge-Browsers ab Version 79 nicht mehr verwendet (siehe 'Blink'). |

## Version der Rendering-Engine

Die meisten Rendering-Engines setzen die Versionsnummer im _RenderingEngine/Versionsnummer_-Token, mit der bemerkenswerten Ausnahme von Gecko. Gecko setzt die Gecko-Versionsnummer im Kommentarbereich des User-Agent nach dem `rv:`-String. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version wird dieser Wert auch im `Gecko/version`-Token gesetzt (frühere Versionen enthielten dort das Build-Datum, dann ein festes Datum, genannt GeckoTrail).

## Betriebssystem

Das Betriebssystem wird in den meisten User-Agent-Zeichenfolgen angegeben (obwohl nicht auf weborientierten Plattformen wie Firefox OS), aber das Format variiert stark. Es ist ein fester String zwischen zwei Semikolons im Kommentarbereich des User-Agent. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das OS an, aber oft auch dessen Version und Informationen zur zugrunde liegenden Hardware (32- oder 64-Bit, Intel/PPC für Mac oder x86/ARM-CPU-Architektur für Windows-PCs).

Wie in allen Fällen können sich diese Strings in Zukunft ändern, sie sollten nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwendet werden. Eine technologische Umfrage muss eingerichtet werden, um das Skript anzupassen, wenn neue Browserversionen veröffentlicht werden.

### Mobil, Tablet oder Desktop

Der häufigste Grund für User-Agent-Sniffing ist die Bestimmung, auf welchem Gerätetyp der Browser läuft. Das Ziel ist, je nach Gerätetyp unterschiedlichen HTML bereitzustellen.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Machen Sie vor allem keine unterschiedlichen Standardeinstellungen für unterschiedliche Browser oder Rendering-Engines.
- Verwenden Sie niemals das OS-Token, um zu definieren, ob ein Browser auf einem mobilen Gerät, Tablet oder Desktop läuft. Das OS kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie häufige Browseranbieter anzeigen, dass ihre Browser auf einem mobilen Gerät ausgeführt werden:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` im Kommentar.                      | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                           | `Opera Mobi/xyz`-Token im Kommentar.                      | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/`-Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammenfassend empfehlen wir, nach dem String `Mobi` überall im User-Agent zu suchen, um ein mobiles Gerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Seite bereitstellen (die als Best Practice ohnehin Touch-Eingaben unterstützen sollte, da immer mehr Desktop-Rechner mit Touchscreens erscheinen).
