---
title: Browser-Erkennung mittels User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{HTTPSidebar}}

Unterschiedliche Webseiten oder Dienste für verschiedene Browser bereitzustellen, ist in der Regel eine schlechte Idee. Das Web soll für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Webseite so zu entwickeln, dass sie sich schrittweise basierend auf der Verfügbarkeit von Funktionen verbessert, anstatt auf bestimmte Browser abzuzielen.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch einige Grenzfälle, in denen die Erkennung des Browsers erforderlich ist. Die Verwendung des User-Agents, um den Browser zu erkennen, sieht einfach aus, aber es tatsächlich gut zu machen, ist ein sehr schwieriges Problem. Dieses Dokument wird Sie so gut wie möglich dabei leiten.

> [!NOTE]
> Es lohnt sich zu wiederholen: Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden. Sie können fast immer eine bessere, breiter kompatible Lösung für Ihr Problem finden!

## Überlegungen vor der Verwendung der Browser-Erkennung

Wenn Sie in Erwägung ziehen, den User-Agent-String zur Erkennung des verwendeten Browsers zu verwenden, sollten Sie zuerst versuchen, dies nach Möglichkeit zu vermeiden. Beginnen Sie damit, zu identifizieren, **warum** Sie es tun wollen.

- Versuchen Sie, einen bestimmten Fehler in einer bestimmten Version eines Browsers zu umgehen?
  - : Schauen Sie in speziellen Foren nach, oder fragen Sie dort: Es ist unwahrscheinlich, dass Sie der Erste sind, der auf dieses Problem stößt. Experten oder Personen mit einem anderen Blickwinkel können Ihnen Ideen zur Umgehung des Fehlers geben. Wenn das Problem ungewöhnlich erscheint, lohnt es sich zu überprüfen, ob dieser Fehler bereits dem Browserhersteller über deren Bug-Tracking-System gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller achten auf Fehlerberichte und die Analyse kann Hinweise auf andere Umgehungsmöglichkeiten geben.
- Versuchen Sie, das Vorhandensein einer bestimmten Funktion zu prüfen?
  - : Ihre Website muss eine bestimmte Web-Funktion nutzen, die einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer auf eine ältere Website mit weniger Funktionen senden, von der Sie wissen, dass sie funktioniert. Dies ist der schlechteste Grund, um User-Agent-Erkennung zu verwenden, da letztendlich alle anderen Browser aufholen werden. Zudem ist es nicht praktikabel, jeden der weniger populären Browser zu testen und deren Web-Funktionen zu überprüfen. Sie sollten **niemals** User-Agent-Sniffing verwenden. Es gibt **immer** die Alternative der Funktionsüberprüfung.
- Möchten Sie verschiedenen HTML-Inhalt je nach verwendetem Browser bereitstellen?
  - : Das ist in der Regel eine schlechte Praxis, aber es gibt einige Fälle, in denen das notwendig ist. In diesen Fällen sollten Sie Ihre Situation zuerst analysieren, um sicherzustellen, dass es wirklich notwendig ist. Können Sie dies durch das Hinzufügen einiger nicht-semantischer {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente vermeiden? Die Schwierigkeiten, die bei der erfolgreichen Anwendung der User-Agent-Erkennung bestehen, rechtfertigen einige Abstriche bei der Reinheit Ihres HTML. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder flüssige Layouts verwenden, um die Notwendigkeit dafür zu vermeiden?

## Vermeidung der User-Agent-Erkennung

Wenn Sie die Verwendung der User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Funktionsüberprüfung

  - : Die Funktionsüberprüfung bedeutet, dass Sie nicht versuchen, herauszufinden, welcher Browser Ihre Seite rendert, sondern stattdessen überprüfen, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Wenn dies nicht der Fall ist, verwenden Sie einen Fallback. In den seltenen Fällen, in denen das Verhalten zwischen Browsern unterschiedlich ist, sollten Sie anstatt den User-Agent-String zu überprüfen, einen Test implementieren, um zu erkennen, wie der Browser die API implementiert und wie sie genutzt werden kann. Ein Beispiel für die Funktionsüberprüfung ist das folgende. 2017 [entfernte Chrome die experiment  ansichtenhinter-Unterstützung in regulären Ausdrücken](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte dies. Sie könnten gedacht haben, dies zu tun:

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
Zuerst hat er angenommen, dass alle User-Agent-Strings, die den Unterstring "Chrome" enthalten, Chrome sind. UA-Strings sind notorisch irreführend.
Dann wurde angenommen, dass die lookbehind-Funktion immer verfügbar sein würde, wenn der Browser Chrome ist. Der Agent könnte eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder (da die Funktion zu dieser Zeit experimentell war) könnte es sich um eine spätere Version von Chrome handeln, die sie entfernt hat.
Am wichtigsten ist, dass angenommen wurde, dass keine anderen Browser die Funktion unterstützen würden. Die Unterstützung hätte jederzeit zu anderen Browsern hinzugefügt werden können, aber dieser Code hätte weiterhin den suboptimalen Pfad gewählt.

Probleme wie diese können vermieden werden, indem stattdessen die Unterstützung der Funktion selbst getestet wird:

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browserunterstützung zu testen, ohne User-Agent-Sniffing. Es gibt **nie** einen Grund, den User-Agent-String dafür zu überprüfen.

Abschließend bringen die obigen Code-Snippets ein kritisches Problem bei der plattformübergreifenden Codierung auf, das immer berücksichtigt werden muss. Verwenden Sie die API, die Sie für nicht unterstützte Browser testen, nicht ohne Absicht. Das mag offensichtlich und einfach klingen, aber manchmal ist es das nicht. In den obigen Code-Snippets würde die Verwendung von lookbehind in der Kurznotation des Regulären Ausdrucks (zum Beispiel `/reg/igm`) in nicht unterstützten Browsern einen Parserfehler verursachen. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` verwenden, selbst im lookbehind-unterstützten Abschnitt Ihres Codes.

- Progressive Verbesserung
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in "Schichten", unter Verwendung eines Bottom-up-Ansatzes, beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinanderfolgenden Schichten, die jeweils mehr Funktionen verwenden.
- Fehlertoleranz
  - : Dies ist ein Top-Down-Ansatz, bei dem Sie die bestmögliche Site mit allen gewünschten Funktionen erstellen und dann tweaks vornehmen, um sie auch auf älteren Browsern lauffähig zu machen. Dies kann schwieriger sein und weniger effektiv als progressive Verbesserung, kann aber in manchen Fällen nützlich sein.
- Erkennung von Mobilgeräten

  - : Wahrscheinlich der häufigste Einsatz und Missbrauch von User-Agent-Sniffing ist die Erkennung, ob das Gerät ein Mobilgerät ist. Allerdings übersehen die Leute oft, wonach sie wirklich suchen. Leute verwenden User-Agent-Sniffing, um zu erkennen, ob das Gerät des Benutzers touchfreundlich ist und einen kleinen Bildschirm hat, damit sie ihre Website entsprechend optimieren können. Während User-Agent-Sniffing dies manchmal erkennen kann, sind nicht alle Geräte gleich: Einige Mobilgeräte haben große Bildschirmgrößen, einige Desktops haben einen kleinen Touchscreen, einige Leute benutzen Smart TVs, die eine ganz andere Sache sind, und einige Leute können die Breite und Höhe ihres Bildschirms dynamisch ändern, indem sie ihr Tablet auf die Seite drehen! User-Agent-Sniffing ist also definitiv nicht der Weg. Glücklicherweise gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) um zu erkennen, ob das Gerät des Benutzers einen Touchscreen hat. Dann kehren Sie zur Überprüfung des User-Agent-Screens zurück, nur `if (!("maxTouchPoints" in navigator)) { /* Code hier */ }`. Anhand dieser Informationen, ob das Gerät einen Touchscreen hat, ändern Sie nicht das gesamte Layout der Website nur für Touch-Geräte: Sie werden sich nur mehr Arbeit und Wartung aufbürden. Fügen Sie stattdessen Touch-Annehmlichkeiten wie größere, einfacher anklickbare Buttons hinzu (Sie können dies durch Erhöhung der Schriftgröße mit CSS tun). Hier ist ein Beispiel für Code, der das Padding von `#exampleButton` auf `1em` auf Mobilgeräten erhöht.

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

Was die Bildschirmgröße betrifft, verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Bildschirmgröße abhängige Dinge aktualisieren */ })`. Was Sie für die Bildschirmgröße tun wollen, ist nicht, Informationen auf kleineren Bildschirmen abzuschneiden. Das wird die Leute nur verärgern, weil sie gezwungen werden, die Desktop-Version zu verwenden. Versuchen Sie stattdessen, weniger Informationsspalten auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie auf größeren Bildschirmgrößen mehr Spalten mit einer kürzeren Seite haben. Dieser Effekt kann leicht mit CSS [Flexboxen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) erreicht werden, manchmal mit [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats) als teilweise Rückfall.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und den Inhalt der Seite sinnvoll zu gruppieren. Obwohl es ein wenig außerhalb des Themas liegt, könnte das folgende detaillierte Beispiel Ihnen Einblicke und Ideen geben, die Sie davon überzeugen, User-Agent-Sniffing aufzugeben. Lassen Sie uns eine Seite vorstellen, die aus Informationsboxen besteht; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, einen Überblick und eine historische Fakten. Die Bilder werden selbst auf großen Bildschirmen auf eine vernünftige Maximalgröße beschränkt. Zum Zweck der sinnvollen Gruppierung des Inhalts sind alle Katzenboxen von allen Hundeboxen getrennt, sodass die Katzen- und Hundeboxen nicht miteinander vermischt sind. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den Raum zu reduzieren, der links und rechts von den Bildern verschwendet wird. Die Boxen können auf zwei gleichermaßen fairen Methode in mehrere Spalten aufgeteilt werden. Von diesem Punkt an werden wir annehmen, dass alle Hundeboxen oben im Quellcode sind, dass alle Katzenboxen unten im Quellcode sind und dass all diese Boxen dasselbe Elternelement haben. Natürlich gibt es eine einzelne Instanz einer Hundebox unmittelbar über einer Katzenbox. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um den Inhalt so zu gruppieren, dass beim Anzeigen der Seite für den Endbenutzer alle Hunde-Boxen ganz oben auf der Seite und alle Katzen-Boxen weiter unten auf der Seite sind. Die zweite Methode verwendet ein [Spaltenlayout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) und positioniert alle Hunde links und alle Katzen rechts. Nur in diesem spezifischen Szenario ist es angemessen, kein Fallback für das Flexbox/Mehrspaltenlayout bereitzustellen, was auf alten Browsern in einer einzigen Spalte sehr breiter Boxen resultiert. Berücksichtigen Sie auch das Folgende. Wenn mehr Menschen die Webseite besuchen, um die Katzen zu sehen, dann könnte es eine gute Idee sein, alle Katzen höher im Quellcode zu platzieren als die Hunde, damit mehr Menschen auf kleineren Bildschirmen, auf denen der Inhalt auf eine Spalte kollabiert, schneller finden können, wonach sie suchen.

Als nächstes sollte Ihr Code immer dynamisch sein.
Der Benutzer kann sein Mobilgerät auf die Seite kippen und die Seitenbreite und -höhe ändern.
Oder es könnte in der Zukunft ein seltsames klapphandyartiges Geräte-Ding geben, aufklappen
 das die Bildschirmgröße vergrößert.
Seien Sie nie der Entwickler, der Kopfschmerzen damit hat, wie man mit dem klapphandyartigen Geräte-Ding umgeht.
Seien Sie nie mit Ihrer Webseite zufrieden, bis Sie das Entwicklerwerkzeuge-Seitenfenster öffnen und den Bildschirm in der Größe ändern können, während die Webseite glatt, flüssig und dynamisch anpassbar aussieht.
Der einfachste Weg, dies zu tun, besteht darin, den gesamten Code, der Inhalte basierend auf der Bildschirmgröße verschiebt, in einer einzelnen Funktion zu trennen, die beim Laden der Seite und bei jedem [resize](/de/docs/Web/API/Window/resize_event)-Ereignis danach aufgerufen wird. Wenn durch diese Lay Funktion vor ihrer Bestimmung des neuen Layouts der Seite viel berechnet wird, sollte man die Ereignislistener durch {{Glossary("debounce", "Entprellung")}} anpassen, dass sie nicht so häufig aufgerufen werden.
Beachten Sie auch, dass es einen großen Unterschied zwischen den Mediensuchanfragen `( max-width: 25em)` , `not all and ( min-width: 25em)` und `max-width: 24.99em`:  `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and ( min-width: 25em)` `(max-width: 25em)` enthält.
`(max-width: 24.99em)` ist eine billigere Version von `not all and ( min-width: 25em)`: Verwenden Sie nicht `(max-width: 24.99em)`, weil das Layout _möglicherweise_ auf sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten in der Zukunft bricht.
 Seien Sie immer sehr vorsichtig bei der Wahl der richtigen Medienabfrage und der Wahl des richtigen `>= , <= , > ` oder `<` in jedem entsprechenden JavaScript, weil es sehr leicht ist, diese durcheinanderzubringen, was dazu führt, dass die Webseite genau bei der Bildschirmgröße, bei der sich das Layout ändert, unordentlich aussieht.
 Testen Sie die Webseite also gründlich bei den exakten Breiten/Höhen, bei denen Layoutänderungen auftreten, um sicherzustellen, dass die Layoutänderungen ordnungsgemäß stattfinden.

## Das Beste aus dem User-Agent-Sniffing machen

Nachdem Sie alle oben genannten besseren Alternativen zum User-Agent-Sniffing betrachtet haben, gibt es immer noch einige potenzielle Fälle, in denen User-Agent-Sniffing angemessen und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung von User-Agent-Sniffing als Fallbackmethode, um zu erkennen, ob das Gerät einen Touchscreen hat. Weitere Informationen finden Sie im Abschnitt [Mobile Device Detection](#mobile_device_detection).

Ein weiterer solcher Fall ist das Beheben von Fehlern in Browsern, die nicht automatisch aktualisieren. WebKit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS, intern WebKit zu verwenden, sodass der Benutzer keine bessere, aktualisierte Version des Browsers auf älteren Geräten erhalten kann. Die meisten Fehler können erkannt werden, aber einige Fehler benötigen mehr Aufwand, um erkannt zu werden. In solchen Fällen könnte es von Vorteil sein, User-Agent-Sniffing zu verwenden, um die Leistung zu verbessern. Beispielsweise hat WebKit 6 einen Fehler, bei dem das Gerät bei einer Änderung der Orientierung möglicherweise keine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Listeners auslöst, wenn es sollte. Um diesen Fehler zu überwinden,sehe den folgenden Code an.

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

## Welcher Teil des User-Agents enthält die gesuchte Information?

Da es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings gibt, ist dies der knifflige Part.

### Browsername und -version

Wenn Menschen sagen, sie wollen "Browsererkennung", wollen sie oft tatsächlich "Rendering-Engine-Erkennung". Möchten Sie wirklich Firefox erkennen, im Gegensatz zu SeaMonkey, oder Chrome im Gegensatz zu Chromium? Oder möchten Sie tatsächlich überprüfen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies Ihr Bedarf ist, siehe weiter unten auf der Seite.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Da der Name jedoch nicht die einzige Information ist, die in einem User-Agent-String in diesem Format vorliegt, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der gesuchte Name existiert. Beachten Sie jedoch, dass einige Browser lügen: Chrome beispielsweise meldet sich sowohl als Chrome als auch als Safari. Um Safari zu erkennen, müssen Sie auf den Safari-String und das Fehlen des Chrome-Strings achten. Chromium meldet sich oft auch als Chrome oder Seamonkey berichtet sich manchmal als Firefox.

Achten Sie auch darauf, keine einfachen regulären Ausdrücke für den Browsernamen zu verwenden, User-Agents enthalten auch außerhalb der Keyword/Wert-Syntax Zeichenfolgen. Safari & Chrome enthalten beispielsweise die Zeichenfolge 'like Gecko'.

| Browsername                     | Muss enthalten    | Darf nicht enthalten            |
| ------------------------------- | ----------------- | ------------------------------- |
| Firefox                         | `Firefox/xyz`     | `Seamonkey/xyz`                 |
| Seamonkey                       | `Seamonkey/xyz`   |                                 |
| Chrome                          | `Chrome/xyz`      | `Chromium/xyz` oder `Edg.*/xyz` |
| Chromium                        | `Chromium/xyz`    |                                 |
| Safari                          | `Safari/xyz`      | `Chrome/xyz` oder `Chromium/xyz`|
| Opera 15+ (Blink-basiert)       | `OPR/xyz`         |                                 |
| Opera 12- (Presto-basiert)      | `Opera/xyz`       |                                 |

\[1] Safari gibt zwei Versionsnummern: eine technische in dem `Safari/xyz` Token und eine benutzerfreundliche in einem `Version/xyz` Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser einige dieser Dinge nicht übernehmen wird (wie Chrome in der Vergangenheit den Safari-String übernommen hat). Deshalb ist die Browsererkennung mit dem User-Agent-String unzuverlässig und sollte nur zusammen mit der Überprüfung der Versionsnummer erfolgen (das Kapern vergangener Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits gesehen, ist es in den meisten Fällen besser, nach der Rendering-Engine zu suchen. Dies wird helfen, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine verwenden, werden eine Seite auf die gleiche Weise anzeigen: Es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive Haupt-Rendering-Engines: Blink, Gecko und WebKit. Da das Aufspüren der Namen von Rendering-Engines üblich ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Es ist daher wichtig, darauf zu achten, keine falsch positiven Ergebnisse zu erzeugen, wenn die Rendering-Engine erkannt wird.

| Engine    | Muss enthalten       | Kommentar                                                                                                                                                                                       |
| --------- | ---------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Blink     | `Chrome/xyz`         |                                                                                                                                                                                                 |
| Gecko     | `Gecko/xyz`          |                                                                                                                                                                                                 |
| WebKit    | `AppleWebKit/xyz`    | Achtung, WebKit-Browser fügen einen 'like Gecko'-String hinzu, der möglicherweise falsche positive Ergebnisse für Gecko auslöst, wenn die Erkennung nicht sorgfältig erfolgt.                    |
| Presto    | `Opera/xyz`          | Obsolet; Presto wird nicht mehr in Opera-Browser-Builds >= Version 15 verwendet (siehe 'Blink')                                                                                                 |
| EdgeHTML  | `Edge/xyz`           | Das nicht-Chromium Edge setzt seine Engine-Version nach dem _Edge/_ Token, nicht die Anwendungs-Version. Obsolet; EdgeHTML wird nicht mehr in Edge-Browser-Builds >= Version 79 verwendet (siehe 'Blink').|

## Rendering-Engine-Version

Die meisten Rendering-Engines setzen die Versionsnummer im _RenderingEngine/VersionNumber_ Token, mit Ausnahme von Gecko. Gecko setzt die Gecko-Versionsnummer im Kommentarteil des User-Agents nach dem `rv:` String. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version setzt es diesen Wert auch im `Gecko/version` Token (frühere Versionen gaben dort das Build-Datum an, dann ein festgelegtes Datum namens GeckoTrail).

## Betriebssystem

Das Betriebssystem ist in den meisten User-Agent-Strings angegeben (obwohl nicht web-fokussierte Plattformen wie Firefox OS), aber das Format variiert stark. Es handelt sich um einen festen String zwischen zwei Semikolons im Kommentarteil des User-Agents. Diese Strings sind spezifisch für jeden Browser. Sie geben das Betriebssystem an, oft aber auch seine Version und Informationen zur zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).

Wie in allen Fällen könnten sich diese Strings in Zukunft ändern, sie sollten nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwendet werden. Eine technologische Überwachung muss vorhanden sein, um das Skript anzupassen, wenn neue Browserversionen erscheinen.

### Mobil, Tablet oder Desktop

Der häufigste Grund für die Durchführung von User-Agent-Sniffing ist die Bestimmung, auf welchem Gerät der Browser läuft. Das Ziel ist es, unterschiedliche HTML-Inhalte für verschiedene Gerätetypen anzubieten.

- Gehen Sie nie davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Machen Sie insbesondere keine unterschiedlichen Standard-Einstellungen für verschiedene Browser oder Rendering-Engines.
- Verwenden Sie niemals das Betriebssystem-Token, um zu bestimmen, ob ein Browser auf einem mobilen Gerät, Tablet oder Desktop läuft. Das Betriebssystem kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter anzeigen, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                           | Regel                                                | Beispiel                                                                                                                                                             |
| ----------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                          | `Mobile` oder `Tablet` innerhalb des Kommentars.     | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                     |
| WebKit-basiert (Android, Safari)                                  | `Mobile Safari`-Token außerhalb des Kommentars.      | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`                    |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android)| `Mobile Safari`-Token außerhalb des Kommentars.      | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`       |
| Presto-basiert (Opera 12-)                                        | `Opera Mobi/xyz`-Token innerhalb des Kommentars.     | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                                 |
| Edge auf Windows 10 Mobile                                        | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299`      |

Zusammengefasst empfehlen wir, überall im User-Agent nach dem String `Mobi` zu suchen, um ein mobiles Gerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Website bereitstellen (die, wie eine bewährte Praxis, Berührungen trotzdem unterstützen sollte, da immer mehr Desktop-Geräte mit Touchscreens ausgestattet sind).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client Hinweise](/de/docs/Web/HTTP/Client_hints)
- [Implementierung der Funktionsüberprüfung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
