---
title: Browser-Erkennung mittels User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Unterschiedliche Webseiten oder Dienste für verschiedene Browser bereitzustellen, ist in der Regel keine gute Idee. Das Web soll für jeden zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät er oder sie nutzt. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich basierend auf der Verfügbarkeit von Funktionen schrittweise verbessert, anstatt gezielt bestimmte Browser anzusprechen.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch ein paar spezielle Fälle, in denen die Erkennung des Browsers notwendig ist. Die Verwendung des User-Agent zur Erkennung des Browsers erscheint einfach, aber es ist tatsächlich ein sehr schwieriges Problem, es gut zu machen. Dieses Dokument wird Sie dabei begleiten, dies so korrekt wie möglich zu tun.

> [!NOTE]
> Es ist wichtig zu betonen: Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden. Sie können fast immer einen besseren und breiter kompatiblen Weg finden, um Ihr Problem zu lösen!

## Überlegungen vor der Nutzung der Browser-Erkennung

Bevor Sie darüber nachdenken, die User-Agent-String zu verwenden, um herauszufinden, welcher Browser verwendet wird, sollten Sie zunächst versuchen, dies zu vermeiden, wenn möglich. Beginnen Sie damit, zu identifizieren, **warum** Sie dies tun möchten.

- Versuchen Sie, einen bestimmten Fehler in einer bestimmten Browserversion zu umgehen?
  - : Informieren Sie sich oder fragen Sie in spezialisierten Foren: Sie sind wahrscheinlich nicht der oder die Erste, der oder die auf dieses Problem stößt. Außerdem können Experten oder Leute mit einem anderen Blickwinkel Ihnen Ideen geben, wie Sie den Fehler umgehen können. Wenn das Problem selten zu sein scheint, lohnt es sich zu prüfen, ob dieser Bug dem Browser-Hersteller über deren Bug-Tracking-System gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller achten auf Fehlerberichte, und die Analyse könnte auf andere Umgehungen für den Fehler hinweisen.
- Versuchen Sie, die Existenz einer bestimmten Funktion zu überprüfen?
  - : Ihre Website muss eine bestimmte Web-Funktion verwenden, die einige Browser noch nicht unterstützen, und Sie möchten diese Nutzer auf eine ältere, weniger funktionsreiche Website führen, von der Sie wissen, dass sie funktioniert. Dies ist der schlechteste Grund, um User-Agent-Erkennung zu verwenden, da irgendwann alle anderen Browser aufholen werden. Außerdem ist es nicht praktikabel, jeden der weniger populären Browser zu testen und auf diese Webfeatures zu prüfen. Sie sollten **nie** User-Agent-Sniffing verwenden. Es gibt **immer** die Alternative, stattdessen Feature-Erkennung zu machen.
- Möchten Sie unterschiedliche HTML je nach Browser bereitstellen?
  - : Das ist normalerweise eine schlechte Praxis, aber es gibt einige Fälle, in denen dies notwendig ist. In diesen Fällen sollten Sie zuerst Ihre Situation analysieren, um sicherzugehen, dass es wirklich notwendig ist. Können Sie dies verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen? Die Schwierigkeit, User-Agent-Erkennung erfolgreich zu verwenden, ist ein paar Störungen der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder flexible Layouts verwenden, um das Bedürfnis danach zu beseitigen?

## Vermeidung der User-Agent-Erkennung

Wenn Sie die Nutzung der User-Agent-Erkennung vermeiden möchten, gibt es Möglichkeiten!

- Feature-Erkennung

  - : Feature-Erkennung ist, wo Sie nicht versuchen herauszufinden, welcher Browser Ihre Seite rendert, sondern stattdessen überprüfen, ob das spezifische Feature, das Sie benötigen, verfügbar ist. Wenn nicht, verwenden Sie einen Fallback. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie anstelle des Überprüfens des User-Agent-Strings einen Test implementieren, um zu erkennen, wie der Browser die API implementiert und wie Sie sie daraufhin verwenden. Ein Beispiel für Feature-Erkennung ist das folgende. Im Jahr 2017 [schaltete Chrome experimentelle Unterstützung für Lookbehind in regulären Ausdrücken frei](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte es. Also hätten Sie gedacht, dies zu tun:

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
Erstens wurde angenommen, dass alle User-Agent-Strings, die das Substring "Chrome" enthalten, Chrome sind. User-Agent-Strings sind notorisch irreführend.
Dann wurde angenommen, dass das Lookbehind-Feature immer verfügbar wäre, wenn der Browser Chrome wäre. Der Agent könnte eine ältere Chrome-Version sein, von bevor die Unterstützung hinzugefügt wurde, oder (weil das Feature zu der Zeit experimentell war) eine spätere Chrome-Version, die es entfernt hat.
Am wichtigsten ist, dass angenommen wurde, dass das Feature von keinem anderen Browser unterstützt wird. Die Unterstützung hätte jederzeit zu anderen Browsern hinzugefügt werden können, aber dieser Code hätte weiterhin den minderwertigen Pfad gewählt.

Probleme wie diese können vermieden werden, indem man die Unterstützung des Features selbst testet:

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, Browser-Unterstützung ohne User-Agent-Sniffing zu testen. Es gibt **niemals** einen Grund, den User-Agent-String dafür zu überprüfen.

Zuletzt bringen die obigen Code-Schnipsel ein kritisches Problem des plattformübergreifenden Codings auf, das stets berücksichtigt werden muss. Verwenden Sie die API, die Sie testen, nicht unbeabsichtigt in nicht unterstützten Browsern. Dies mag offensichtlich und einfach klingen, ist es jedoch manchmal nicht. Zum Beispiel führt die Verwendung von Lookbehind in einer kurzen Regexp-Notation (etwa `/reg/igm`) in nicht unterstützten Browsern zu einem Parser-Fehler. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` sogar im Lookbehind-unterstützten Abschnitt Ihres Codes verwenden.

- Progressive Enhancement
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in 'Schichten', wobei Sie einen Bottom-up-Ansatz verwenden und mit einer einfacheren Schicht beginnen sowie die Fähigkeiten der Website in aufeinanderfolgenden Schichten verbessern, jede mit mehr Funktionen.
- Graceful Degradation
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen bauen und dann anpassen, um sie auf älteren Browsern zum Laufen zu bringen. Dies kann schwieriger sein und weniger effektiv als progressive Verbesserung, kann aber in einigen Fällen nützlich sein.
- Erkennung mobiler Geräte
  - : Wahrscheinlich der häufigste Gebrauch und Missbrauch von User-Agent-Sniffing ist die Erkennung, ob das Gerät ein mobiles Gerät ist. Oft übersehen Menschen jedoch, wonach sie wirklich suchen. Menschen verwenden User-Agent-Sniffing, um zu erkennen, ob das Benutzergerät touchfreundlich ist und einen kleinen Bildschirm hat, damit sie ihre Website entsprechend optimieren können. Während User-Agent-Sniffing manchmal dies erkennen kann, sind nicht alle Geräte gleich: Einige mobile Geräte haben große Bildschirmgrößen, einige Desktops haben einen kleinen Touchscreen, einige Leute benutzen Smart-TVs, die ein ganz anderes Spiel sind, und einige Leute können die Breite und Höhe ihres Bildschirms dynamisch ändern, indem sie ihr Tablet auf die Seite drehen! User-Agent-Sniffing ist also definitiv nicht der Weg. Zum Glück gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints), um zu erkennen, ob das Benutzergerät einen Touchscreen hat. Dann können Sie zurückfallen, um den User-Agent-Screen nur zu überprüfen `if (!("maxTouchPoints" in navigator)) { /* Hier Code */ }`. Verwenden Sie diese Information, ob das Gerät einen Touchscreen hat. Ändern Sie nicht das gesamte Layout der Website nur für Touchgeräte: Das wird Ihnen nur mehr Arbeit und Wartung bescheren. Fügen Sie stattdessen Touch-Annehmlichkeiten wie größere, leichter klickbare Knöpfe hinzu (Sie können dies mit CSS tun, indem Sie die Schriftgröße erhöhen). Hier ist ein Beispiel für Code, der das Padding von `#exampleButton` auf `1em` auf mobilen Geräten erhöht.

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

Was die Bildschirmgröße betrifft, verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Bildschirmgrößenabhängige Dinge aktualisieren */ })`. Was Sie für die Bildschirmgröße tun möchten, ist nicht Informationen auf kleineren Bildschirmen abzuschneiden. Das wird die Leute nur verärgern, weil es sie zwingen wird, die Desktop-Version zu verwenden. Versuchen Sie stattdessen, auf kleineren Bildschirmen weniger Spalten von Informationen auf einer längeren Seite zu haben, während auf größeren Bildschirmgrößen mehr Spalten mit einer kürzeren Seite vorhanden sind. Dieser Effekt kann leicht mit CSS [Flexboxes](/de/docs/Learn/web_development/Core/CSS_layout/Flexbox) erreicht werden, manchmal mit [Floats](/de/docs/Learn/web_development/Core/CSS_layout/Floats) als teilweiser Fallback.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und den Inhalt der Seite sinnvoll zu gruppieren. Obwohl es abseits des Themas ist, könnte Ihnen das folgende detaillierte Beispiel Einblicke und Ideen geben, die Sie dazu bewegen, auf User-Agent-Sniffing zu verzichten. Stellen wir uns eine Seite vor, die aus Informationsboxen besteht; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, einen Überblick und eine historische unterhaltsame Tatsache. Die Bilder werden auch auf großen Bildschirmen auf eine maximal vernünftige Größe begrenzt. Um den Inhalt sinnvoll zu gruppieren, sind alle Katzenboxen von allen Hundeboxen getrennt, so dass die Katzen- und Hundeboxen nicht zusammen gemischt sind. Auf einem großen Bildschirm sparen mehrere Spalten Platz, um den Raum zu reduzieren, der links und rechts von den Bildern verschwendet wird. Die Boxen können nach zwei gleich fairen Methoden in mehrere Spalten unterteilt werden. Von diesem Punkt an gehen wir davon aus, dass alle Hundeboxen oben im Quellcode stehen, dass alle Katzenboxen unten im Quellcode stehen und dass all diese Boxen das gleiche Elternelement haben. Natürlich gibt es eine einzige Instanz einer Hundebox direkt über einer Katzenbox. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn/web_development/Core/CSS_layout/Flexbox), um den Inhalt so zu gruppieren, dass, wenn die Seite dem Endbenutzer angezeigt wird, alle Hundeboxen oben auf der Seite und alle Katzenboxen weiter unten auf der Seite sind. Die zweite Methode verwendet ein [Column](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) Layout und setzt alle Hunde nach links und alle Katzen nach rechts. Nur in diesem speziellen Szenario ist es angebracht, keinen Fallback für die Flexbox-/Mehrspaltenlayouts bereitzustellen, was zu einer einzigen Spalte sehr breiter Boxen in alten Browsern führt. Ziehen Sie auch Folgendes in Betracht. Wenn mehr Leute die Webseite besuchen, um die Katzen zu sehen, dann könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, damit mehr Leute schneller finden, wonach sie suchen, auf kleineren Bildschirmen, wo sich der Inhalt auf eine Spalte zusammenklappt.

Machen Sie als nächstes immer Ihren Code dynamisch.
Der Benutzer kann sein mobiles Gerät auf die Seite drehen und dadurch die Breite und Höhe der Seite ändern.
Oder es könnte in der Zukunft ein seltsames klappbares Geräte-Ding geben, bei dem das Aufklappen den Bildschirm vergrößert.
Seien Sie nicht der Entwickler, der Kopfschmerzen darüber hat, wie man mit dem klappbaren Geräte-Ding umgeht.
Seien Sie niemals zufrieden mit Ihrer Webseite, bis Sie das Entwicklertools-Seitenpanel öffnen und die Größe des Bildschirms ändern können, während die Webseite glatt, flüssig und dynamisch angepasst aussieht.
Der einfachste Weg, dies zu tun, besteht darin, den gesamten Code, der den Inhalt basierend auf der Bildschirmgröße bewegt, in eine einzige Funktion zu trennen, die beim Laden der Seite und bei jedem [Resize](/de/docs/Web/API/Window/resize_event)-Ereignis danach aufgerufen wird. Wenn viel von dieser Layout-Funktion berechnet wird, bevor sie das neue Layout der Seite bestimmt, dann ziehen Sie in Betracht, das Ereignis mit {{Glossary("debounce", "Debouncing")}} zu versehen, damit es nicht so oft aufgerufen wird.
Beachten Sie auch, dass es einen großen Unterschied zwischen den Media Queries `(max-width: 25em)`, `not all and (min-width: 25em)` und `(max-width: 24.99em)` gibt: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einschließt.
`(max-width: 24.99em)` ist eine Version von `not all and (min-width: 25em)`, die man nicht verwenden sollte: Verwenden Sie `(max-width: 24.99em)` nicht, da das Layout auf sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten in der Zukunft brechen _könnte_.
Seien Sie immer sehr sorgfältig bei der Auswahl der richtigen Media Query und bei der Auswahl des richtigen `>=`, `<=`, `>` oder `<` in allen entsprechenden JavaScript, da es sehr einfach ist, dies zu verwechseln, was dazu führt, dass die Webseite seltsam aussieht, genau an der Bildschirmgröße, bei der das Layout ändert.
Testen Sie daher die Webseite gründlich bei den genaueren Breiten/Höhen, wo Layoutänderungen passieren, um sicherzustellen, dass die Layoutänderungen korrekt passieren.

## Das Beste aus User-Agent-Sniffing machen

Nachdem Sie all die oben genannten besseren Alternativen zum User-Agent-Sniffing überprüft haben, gibt es immer noch einige potenzielle Fälle, in denen das User-Agent-Sniffing angebracht und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung von User-Agent-Sniffing als Fallback, wenn erkannt wird, ob das Gerät einen Touchscreen hat. Weitere Informationen finden Sie im Abschnitt zur [Erkennung mobiler Geräte](#mobile_device_detection).

Ein anderer Fall ist die Behebung von Fehlern in Browsern, die nicht automatisch aktualisiert werden. WebKit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS dazu, intern WebKit zu verwenden, sodass der Benutzer keine Möglichkeit hat, auf älteren Geräten einen besseren, aktualisierten Browser zu erhalten. Die meisten Fehler können entdeckt werden, aber einige Fehler erfordern mehr Aufwand, um entdeckt zu werden. In solchen Fällen könnte es vorteilhaft sein, User-Agent-Sniffing zur Performance-Einsparung zu verwenden. Zum Beispiel hat WebKit 6 einen Fehler, bei dem beim Ändern der Geräteausrichtung der Browser möglicherweise nicht [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Listener ausführt, wenn er sollte. Um diesen Fehler zu überwinden, beachten Sie den untenstehenden Code.

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

## Welcher Teil des User-Agents enthält die Informationen, nach denen Sie suchen?

Da es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings gibt, ist dies der knifflige Teil.

### Browser-Name und Version

Wenn Leute sagen, dass sie "Browser-Erkennung" wollen, möchten sie oft tatsächlich "Rendering-Engine-Erkennung". Möchten Sie wirklich Firefox erkennen im Gegensatz zu SeaMonkey, oder Chrome im Gegensatz zu Chromium? Oder möchten Sie wirklich sehen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies das ist, was Sie brauchen, lesen Sie weiter unten auf der Seite.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Aber da der Name nicht die einzige Information in einem User-Agent-String ist, die in diesem Format vorliegt, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der Name, den Sie suchen, vorhanden ist. Beachten Sie jedoch, dass einige Browser lügen: Chrome beispielsweise meldet sowohl als Chrome als auch als Safari. Um Safari zu erkennen, müssen Sie nach der Safari-Zeichenfolge und dem Fehlen der Chrome-Zeichenfolge suchen, Chromium meldet sich oft auch als Chrome oder Seamonkey manchmal als Firefox.

Achten Sie auch darauf, keine einfache reguläre Ausdruck auf den Browsernamen anzuwenden. User-Agents enthalten auch Zeichenfolgen außerhalb der Keyword/Value-Syntax. Safari & Chrome enthalten beispielsweise die Zeichenfolge 'like Gecko'.

| Browser-Name                    | Muss enthalten  | Darf nicht enthalten           |
| ------------------------------- | --------------- | ------------------------------ |
| Firefox                         | `Firefox/xyz`   | `Seamonkey/xyz`                |
| Seamonkey                       | `Seamonkey/xyz` |                                |
| Chrome                          | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`|
| Chromium                        | `Chromium/xyz`  |                                |
| Safari                          | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (auf Blink basierende Engine)  | `OPR/xyz`       |                                |
| Opera 12- (auf Presto basierende Engine) | `Opera/xyz`     |                                |

\[1] Safari gibt zwei Versionsnummern: eine technische im `Safari/xyz`-Token und eine benutzerfreundliche in einem `Version/xyz`-Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser einige dieser Dinge nicht kapert (wie Chrome in der Vergangenheit die Safari-Zeichenfolge gekapert hat). Deshalb ist die Browser-Erkennung mittels User-Agent-String unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer durchgeführt werden (das Kapern alter Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits vorher gesehen, ist in den meisten Fällen das Suchen nach der Rendering-Engine der bessere Weg. Dies wird dazu beitragen, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine teilen, zeigen eine Seite auf die gleiche Weise an: es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive Haupt-Rendering-Engines: Blink, Gecko und WebKit. Da das Sniffing der Rendering-Engine-Namen üblich ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Es ist daher wichtig, darauf zu achten, keine Fehlentscheidungen zu treffen, wenn die Rendering-Engine erkannt wird.

| Engine   | Muss enthalten       | Kommentar                                                                                                                                                                                                                                                                                                                                         |
| -------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`         |                                                                                                                                                                                                                                                                                                                                                   |
| Gecko    | `Gecko/xyz`          |                                                                                                                                                                                                                                                                                                                                                   |
| WebKit   | `AppleWebKit/xyz`    | Achten Sie darauf, WebKit-Browser fügen eine 'like Gecko'-Zeichenfolge hinzu, die eine Fehlentscheidung für Gecko auslösen könnte, wenn die Erkennung nicht sorgfältig erfolgt.                                                                                                                                                                    |
| Presto   | `Opera/xyz`          | Obsolet; Presto wird in Opera-Browser-Builds >= Version 15 (siehe 'Blink') nicht mehr verwendet.                                                                                                                                                                                                                                                 |
| EdgeHTML | `Edge/xyz`           | Der nicht-Chromium-Edge setzt seine Engine-Version nach dem _Edge/_-Token, nicht die Anwendungsversion. Obsolet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 (siehe 'Blink') nicht mehr verwendet.                                                                                                                                           |

## Rendering-Engine-Version

Die meisten Rendering-Engines setzen die Versionsnummer im _RenderingEngine/VersionNumber_-Token, mit der bemerkenswerten Ausnahme von Gecko. Gecko setzt die Gecko-Versionsnummer in den Kommentarbereich des User-Agents nach dem `rv:`-String. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version setzt es diesen Wert auch im `Gecko/version`-Token (frühere Versionen setzten dort das Build-Datum, dann ein festes Datum namens GeckoTrail).

## OS

Das Betriebssystem wird in den meisten User-Agent-Strings angegeben (auch wenn Plattformen nicht webbasiert sind, wie Firefox OS) , aber das Format variiert stark. Es ist eine feste Zeichenfolge zwischen zwei Semikolons im Kommentarbereich des User-Agents. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das OS an, aber auch oft seine Version und Informationen über die zugrunde liegende Hardware (32 oder 64 Bits, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows PCs).

Wie in allen Fällen können sich diese Zeichenfolgen in Zukunft ändern, man sollte sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden. Eine technologische Überwachung muss vorhanden sein, um das Skript anzupassen, wenn neue Browserversionen herauskommen.

### Mobil, Tablet oder Desktop

Der häufigste Grund, User-Agent-Sniffing durchzuführen, ist zu bestimmen, auf welchem Typ von Gerät der Browser läuft. Ziel ist es, unterschiedliche HTMLs an unterschiedliche Gerätetypen zu liefern.

- Nehmen Sie niemals an, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Insbesondere machen Sie nicht verschiedene Voreinstellungen für verschiedene Browser oder Rendering-Engines.
- Verwenden Sie niemals den OS-Token, um zu definieren, ob ein Browser auf Mobilgeräten, Tablets oder Desktops läuft. Das OS kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie die meisten Browser-Anbieter angeben, dass ihre Browser auf einem Mobilgerät laufen:

| Browser                                                           | Regel                                                 | Beispiel                                                                                                                                                                                   |
| ----------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mozilla (Gecko, Firefox)                                          | `Mobile` oder `Tablet` im Kommentar.                  | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                                          |
| Basierend auf WebKit (Android, Safari)                            | `Mobile Safari`-Token außerhalb des Kommentars.       | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`                                          |
| Basierend auf Blink (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.       | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`                             |
| Basierend auf Presto (Opera 12-)                                   | `Opera Mobi/xyz`-Token im Kommentar.                  | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                                                     |
| Edge auf Windows 10 Mobile                                         | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299`                             |

Zusammengefasst empfehlen wir, nach der Zeichenfolge `Mobi` irgendwo im User-Agent zu suchen, um ein mobiles Gerät zu erkennen.

> [!NOTE]
> Wenn das Gerät so groß ist, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Seite bereitstellen (die als beste Praxis ohnehin die Touch-Eingabe unterstützen sollte, da immer mehr Desktop-Computer mit Touchscreens ausgestattet werden).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP-Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [Feature-Erkennung implementieren](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
