---
title: Browser-Erkennung mittels User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Unterschiedliche Webseiten oder Dienste für verschiedene Browser bereitzustellen, ist in der Regel eine schlechte Idee. Das Web soll für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich progressiv verbessert, basierend auf der Verfügbarkeit von Funktionen, anstatt auf bestimmte Browser abzuzielen.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch einige Randfälle, in denen die Erkennung des Browsers notwendig ist. Die Verwendung des User-Agents zur Erkennung des Browsers erscheint einfach, aber es richtig zu machen, ist tatsächlich ein sehr schwieriges Problem. Dieses Dokument wird Sie anleiten, dies so korrekt wie möglich zu tun.

> [!NOTE]
> Es lohnt sich, zu wiederholen: Es ist nur sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden. Sie können fast immer einen besseren, breiter kompatiblen Weg finden, um Ihr Problem zu lösen!

## Überlegungen bevor Sie die Browser-Erkennung verwenden

Wenn Sie erwägen, die User-Agent-Zeichenfolge zu verwenden, um zu erkennen, welcher Browser verwendet wird, sollten Sie zunächst versuchen, dies zu vermeiden, falls möglich. Beginnen Sie damit, zu versuchen zu identifizieren, **warum** Sie dies tun möchten.

- Versuchen Sie, einen bestimmten Fehler in einer Version eines Browsers zu umgehen?
  - : Schauen Sie in speziellen Foren nach oder fragen Sie dort: Es ist unwahrscheinlich, dass Sie der Erste sind, der auf dieses Problem stößt. Auch Experten oder Personen mit einem anderen Blickwinkel können Ihnen Ideen zur Umgehung des Fehlers geben. Wenn das Problem ungewöhnlich erscheint, lohnt es sich zu prüfen, ob dieser Fehler dem Browser-Anbieter über ihr Bug-Tracking-System gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller achten auf Fehlerberichte, und die Analyse kann Hinweise auf andere Workarounds für den Fehler geben.
- Versuchen Sie, das Vorhandensein einer bestimmten Funktion zu überprüfen?
  - : Ihre Website muss eine bestimmte Web-Funktion verwenden, die einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer zu einer älteren Website mit weniger Funktionen weiterleiten, von der Sie wissen, dass sie funktioniert. Dies ist der schlechteste Grund, um die User-Agent-Erkennung zu verwenden, da die Wahrscheinlichkeit hoch ist, dass alle anderen Browser irgendwann nachziehen. Außerdem ist es nicht praktikabel, jeden der weniger populären Browser zu testen und auf diese Web-Funktionen zu prüfen. Sie sollten **niemals** User-Agent-Sniffing machen. Es gibt **immer** die Alternative, stattdessen eine Funktionserkennung durchzuführen.
- Möchten Sie je nach verwendetem Browser unterschiedliche HTML bereitstellen?
  - : Dies ist in der Regel eine schlechte Praxis, aber es gibt einige Fälle, in denen dies notwendig ist. In diesen Fällen sollten Sie zuerst Ihre Situation analysieren, um sicherzugehen, dass es wirklich notwendig ist. Können Sie dies verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Elemente hinzufügen? Die Schwierigkeit bei der erfolgreichen Verwendung der User-Agent-Erkennung ist ein paar Unterbrechungen der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder flexible Layouts verwenden, um die Notwendigkeit, dies zu tun, zu verringern?

## Vermeidung der User-Agent-Erkennung

Wenn Sie die Verwendung der User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Funktionsprüfung

  - : Funktionsprüfung bedeutet, dass Sie nicht versuchen, herauszufinden, welcher Browser Ihre Seite rendert, sondern stattdessen prüfen, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Ist dies nicht der Fall, verwenden Sie einen Fallback. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie anstelle des Prüfens der User-Agent-Zeichenfolge stattdessen einen Test implementieren, um festzustellen, wie der Browser die API implementiert und wie Sie sie nutzen können. Ein Beispiel für die Funktionsprüfung ist das Folgende. 2017 hat Chrome [experimentelle Lookbehind-Unterstützung in regulären Ausdrücken unfreeflagged](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte es. So könnten Sie gedacht haben, dies zu tun:

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
Erstens wurde angenommen, dass alle User-Agent-Zeichenfolgen, die den Substring "Chrome" enthalten, Chrome sind. User-Agent-Strings sind berüchtigt irreführend.
Es wurde angenommen, dass die Lookbehind-Funktion immer verfügbar sein würde, wenn der Browser Chrome war. Der Agent könnte eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder (weil die Funktion zu diesem Zeitpunkt experimentell war) es könnte eine spätere Version von Chrome sein, die sie entfernt hat.
Am wichtigsten ist, dass keine anderen Browser die Funktion unterstützen würden. Die Unterstützung könnte jederzeit zu anderen Browsern hinzugefügt werden, aber dieser Code würde weiterhin den minderwertigen Pfad wählen.

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browser-Unterstützung ohne User-Agent-Sniffing zu testen. Es gibt **niemals** einen Grund, die User-Agent-Zeichenfolge dafür zu überprüfen.

Zuletzt bringen die obigen Codebeispiele ein kritisches Problem beim plattformübergreifenden Codieren zur Sprache, das immer berücksichtigt werden muss. Verwenden Sie die API, die Sie in nicht unterstützten Browsern testen, nicht unbeabsichtigt. Dies mag offensichtlich und einfach erscheinen, ist es aber manchmal nicht. Zum Beispiel führt die Verwendung von Lookbehind in der Kurz-Notation regulärer Ausdrücke (zum Beispiel `/reg/igm`) zu einem Parserfehler in nicht unterstützten Browsern. Daher sollten Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` statt `/(?<=look_behind_stuff)/` verwenden, selbst im Lookbehind-unterstützten Abschnitt Ihres Codes.

- Progressive Verbesserung
  - : Diese Designtechnik besteht darin, Ihre Website in "Schichten" zu entwickeln, wobei Sie einen Bottom-Up-Ansatz verwenden, beginnend mit einer einfacheren Schicht und die Fähigkeiten der Website in aufeinanderfolgenden Schichten verbessern, wobei jede Schicht mehr Funktionen verwendet.
- Sanfte Verschlechterung
  - : Dies ist ein Top-Down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und sie dann so anpassen, dass sie auch auf älteren Browsern funktioniert. Dies kann schwieriger und weniger effektiv als progressive Verbesserung sein, aber in einigen Fällen nützlich sein.
- Mobilgeräte-Erkennung

  - : Der häufigste und missbräuchliche Gebrauch von User-Agent-Sniffing ist vermutlich die Erkennung, ob das Gerät ein Mobilgerät ist. Allerdings übersehen die Leute oft, was sie wirklich wollen. Sie verwenden User-Agent-Sniffing, um zu erkennen, ob das Gerät benutzerfreundlich für Touch ist und einen kleinen Bildschirm hat, damit sie ihre Website entsprechend optimieren können. Auch wenn User-Agent-Sniffing dies manchmal erkennen kann, sind nicht alle Geräte gleich: Einige Mobilgeräte haben große Bildschirmgrößen, einige Desktops haben einen kleinen Touchscreen, einige Leute nutzen Smart TVs, die eine ganz andere Kategorie darstellen, und einige können die Breite und Höhe ihres Bildschirms dynamisch durch Drehen ihres Tablets ändern! User-Agent-Sniffing ist also definitiv nicht der richtige Weg. Glücklicherweise gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints), um zu erkennen, ob das Gerät des Benutzers einen Touchscreen hat. Standardmäßig prüfen Sie die User-Agent-Zeichenfolge nur, `if (!("maxTouchPoints" in navigator)) { /* Code hier */ }`. Wenn Sie diese Information verwenden, ob das Gerät einen Touchscreen hat, sollten Sie nicht das gesamte Layout der Website nur für Touchgeräte ändern: Sie erschaffen sich dadurch nur mehr Arbeit und Wartung. Fügen Sie stattdessen Touch-Annehmlichkeiten wie größere, leichter klickbare Schaltflächen ein (das können Sie mit CSS tun, indem Sie die Schriftgröße erhöhen). Hier ist ein Beispiel für Code, der das Padding von `#exampleButton` auf `1em` auf Mobilgeräten erhöht.

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

Was die Bildschirmgröße betrifft, verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Aktualisiere bildschirmgrößenabhängige Dinge */ })`. Was Sie für die Bildschirmgröße tun möchten, ist, auf kleineren Bildschirmen keine Informationen abzuschneiden. Das wird nur die Leute verärgern, weil sie gezwungen sind, die Desktop-Version zu verwenden. Versuchen Sie stattdessen, weniger Informationsspalten auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie mehr Spalten mit einer kürzeren Seite auf größeren Bildschirmgrößen haben. Dieser Effekt kann leicht mit CSS [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox) erreicht werden, manchmal mit [Floats](/de/docs/Learn/CSS/CSS_layout/Floats) als teilweise Fallback.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und den Inhalt der Seite sinnvoll zu gruppieren. Auch wenn es vom Thema abweicht, könnte das folgende detaillierte Beispiel Ihnen Einblicke und Ideen geben, die Sie dazu bringen, auf User-Agent-Sniffing zu verzichten. Stellen wir uns eine Seite mit Informationsboxen vor; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, einen Überblick und ein historisches Funfact. Die Bilder sind sogar auf großen Bildschirmen auf eine angemessene Größe begrenzt. Zum Zwecke der sinnvollen Gruppierung des Inhalts sind alle Katzenboxen von allen Hundeboxen getrennt, sodass die Katzen- und Hundeboxen nicht miteinander vermischt sind. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den Raum links und rechts von den Bildern zu reduzieren. Die Boxen können mit zwei gleich guten Methoden in mehrere Spalten unterteilt werden. Ab hier nehmen wir an, dass alle Hundeboxen oben im Quellcode sind, dass alle Katzenboxen am unteren Ende im Quellcode sind und dass alle diese Boxen dasselbe Elternelement haben. Es gibt eine einzelne Instanz einer Hundebox direkt über einer Katzenbox, natürlich. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox), um den Inhalt so zu gruppieren, dass bei der Anzeige der Seite für den Endbenutzer alle Hundeboxen oben auf der Seite und alle Katzenboxen weiter unten auf der Seite sind. Die zweite Methode verwendet ein [Spalten-](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) Layout und verlagert alle Hunde nach links und alle Katzen nach rechts. Nur in diesem speziellen Szenario ist es angebracht, keinen Fallback für die Flexbox/Multispalten-Layouts bereitzustellen, was in einem einzigen breiten Spalte auf alten Browsern resultiert. Überlegen Sie Folgendes: Wenn mehr Leute die Webseite besuchen, um die Katzen zu sehen, dann könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, damit mehr Leute auf kleineren Bildschirmen das finden, wonach sie suchen, wo sich der Inhalt auf eine Spalte reduziert.

Erstellen Sie schließlich immer Ihren Code dynamisch.
Der Benutzer kann sein Mobilgerät zur Seite drehen, wodurch die Breite und Höhe der Seite geändert werden.
Oder es könnte in der Zukunft ein seltsames Klapphandy-ähnliches Gerät geben, bei dem das Ausklappen den Bildschirm vergrößert.
Seien Sie nicht der Entwickler, der Kopfschmerzen darüber hat, wie er mit dem klapphandy-ähnlichen Gerät umgeht.
Seien Sie niemals zufrieden mit Ihrer Webseite, bis Sie das Entwicklertools-Seitenpanel öffnen und den Bildschirm ohne Abbrüche oder Willkür beim Layout dynamisch vergrößern können.
Der einfachste Weg, dies zu tun, besteht darin, allen Code, der Inhalte basierend auf der Bildschirmgröße verschiebt, in eine einzige Funktion zu packen, die beim Laden der Seite aufgerufen wird und danach bei jeder [Größenänderung](/de/docs/Web/API/Window/resize_event). Wenn diese Layoutfunktion viele Berechnungen anstellt, bevor sie das neue Seitenlayout bestimmt, sollten Sie das Event-Listener {{Glossary("debounce", "entprellen")}}, sodass es nicht so oft aufgerufen wird.
Beachten Sie auch, dass es einen großen Unterschied zwischen den Medienabfragen `(max-width: 25em)`, `not all and (min-width: 25em)` und `(max-width: 24.99em)` gibt: `(max-width: 25em)` schließt `(max-width: 25em)` aus, wohingegen `not all and (min-width: 25em)` `(max-width: 25em)` einbezieht.
`(max-width: 24.99em)` ist ein simpler Ersatz für `not all and (min-width: 25em)`: Verwenden Sie `(max-width: 24.99em)` nicht, weil das Layout _möglicherweise_ bei sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten in der Zukunft bricht.
Seien Sie immer sehr bewusst bei der Auswahl der richtigen Medienabfrage und der Auswahl von `>=`, `<=`, `>` oder `<` in jedem zugehörigen JavaScript, weil es sehr einfach ist, diese zu vermischen, wodurch die Webseite bei genau der Bildschirmgröße seltsam aussieht, bei der sich das Layout ändert.
Testen Sie daher die Website gründlich bei den genauen Breiten/Höhen, bei denen Layoutänderungen auftreten, um sicherzustellen, dass die Layoutänderungen ordnungsgemäß erfolgen.

## Das Beste aus dem User-Agent-Sniffing machen

Nach der Durchsicht all der oben genannten besseren Alternativen zum User-Agent-Sniffing gibt es immer noch einige potenzielle Fälle, in denen User-Agent-Sniffing angebracht und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung von User-Agent-Sniffing als Fallback bei der Erkennung, ob das Gerät einen Touchscreen hat. Weitere Informationen finden Sie im Abschnitt [Mobilgeräte-Erkennung](#mobile_device_detection).

Ein weiterer solcher Fall ist die Behebung von Fehlern in Browsern, die sich nicht automatisch aktualisieren. Webkit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf IOS dazu, intern Webkit zu verwenden, sodass der Benutzer keine Möglichkeit hat, auf älteren Geräten einen besseren aktualisierten Browser zu erhalten. Die meisten Fehler können erkannt werden, aber einige Fehler erfordern mehr Anstrengung, um sie zu erkennen. In solchen Fällen könnte es vorteilhaft sein, User-Agent-Sniffing zu verwenden, um die Leistung zu verbessern. Zum Beispiel hat Webkit 6 einen Fehler, bei dem bei Änderung der Geräteausrichtung der Browser möglicherweise keine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Listener auslöst, wenn er es sollte. Um diesen Fehler zu umgehen, beachten Sie bitte den folgenden Code.

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

## Welcher Teil des User-Agent enthält die gesuchten Informationen?

Da es keine Einheitlichkeit der verschiedenen Teile der User-Agent-Zeichenfolge gibt, ist dies der knifflige Teil.

### Browsername und Version

Wenn Leute sagen, sie wünschen sich "Browser-Erkennung", wollen sie in der Regel "Rendering Engine-Erkennung". Möchten Sie tatsächlich Firefox erkennen, anstelle von SeaMonkey, oder Chrome anstelle von Chromium? Oder möchten Sie tatsächlich sehen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies der Fall ist, lesen Sie weiter unten auf der Seite weiter.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Da der Name jedoch nicht die einzige Information in einer User-Agent-Zeichenfolge ist, die in diesem Format vorliegt, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der gesuchte Name existiert. Beachten Sie jedoch, dass einige Browser lügen: Chrome zum Beispiel meldet sowohl Chrome als auch Safari. Um Safari zu erkennen, müssen Sie also nach der Safari-Zeichenfolge und dem Fehlen der Chrome-Zeichenfolge suchen, Chromium meldet sich ebenfalls oft als Chrome oder Seamonkey meldet sich manchmal als Firefox.

Achten Sie ebenfalls darauf, keine einfachen regulären Ausdrücke auf den Browsernamen zu verwenden, User-Agents enthalten ebenfalls Zeichenfolgen außerhalb des Keyword/Value-Syntax. Safari & Chrome enthalten zum Beispiel die Zeichenfolge 'like Gecko'.

| Browsername                | Muss enthalten  | Darf nicht enthalten             |
| -------------------------- | --------------- | -------------------------------- |
| Firefox                    | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                  | `Seamonkey/xyz` |                                  |
| Chrome                     | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                   | `Chromium/xyz`  |                                  |
| Safari                     | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basiert)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basiert) | `Opera/xyz`     |                                  |

\[1] Safari gibt zwei Versionsnummern an: Eine technische in dem `Safari/xyz`-Token und eine benutzerfreundliche in einem `Version/xyz`-Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser einige dieser Dinge nicht kapern wird (wie Chrome in der Vergangenheit die Safari-Zeichenfolge gekapert hat). Aus diesem Grund ist die Browser-Erkennung mit Hilfe des User-Agent-Strings unzuverlässig und sollte nur mit der Prüfung der Versionsnummer erfolgen (Kapern von älteren Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits erwähnt, ist es in den meisten Fällen besser, nach der Rendering-Engine zu suchen. Dies hilft, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine teilen, werden eine Seite auf die gleiche Weise darstellen: Es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive Haupt-Rendering-Engines: Blink, Gecko und WebKit. Da das Sniffing der Rendering-Engine-Namen üblich ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Es ist daher wichtig, darauf zu achten, keine Fehlalarme bei der Erkennung der Rendering-Engine auszulösen.

| Engine   | Muss enthalten    | Kommentar                                                                                                                                                                                                   |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                                             |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                                             |
| WebKit   | `AppleWebKit/xyz` | Achten Sie darauf, WebKit-Browser fügen eine 'like Gecko'-Zeichenfolge hinzu, die möglicherweise einen Fehlalarm für Gecko auslösen kann, wenn die Erkennung nicht sorgfältig erfolgt.                      |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds ab Version 15 nicht mehr verwendet (siehe 'Blink').                                                                                                           |
| EdgeHTML | `Edge/xyz`        | Der nicht-Chromium Edge setzt seine Engine-Version nach dem _Edge/_-Token, nicht die Anwendungs-Version. Veraltet; EdgeHTML wird in Edge-Browser-Builds ab Version 79 nicht mehr verwendet (siehe 'Blink'). |

## Rendering-Engine-Version

Die meisten Rendering-Engines setzen die Versionsnummer im _RenderingEngine/VersionNumber_-Token, mit der bemerkenswerten Ausnahme von Gecko. Gecko setzt die Gecko-Versionsnummer im Kommentar-Teil des User-Agent nach der `rv:`-Zeichenkette. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version setzt es diesen Wert auch im `Gecko/version`-Token (frühere Versionen setzten dort das Build-Datum oder ein festes Datum namens GeckoTrail).

## Betriebssystem

Das Betriebssystem wird in den meisten User-Agent-Zeichenfolgen angegeben (obwohl nicht auf webfokussierten Plattformen wie Firefox OS), aber das Format variiert stark. Es ist eine feste Zeichenfolge zwischen zwei Semikolons im Kommentarteil des User-Agent. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das Betriebssystem an, aber auch oft seine Version und Informationen über die zugrunde liegende Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).

Wie in allen Fällen können sich diese Zeichenfolgen in Zukunft ändern, man sollte sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden. Eine technologische Überwachung muss vorhanden sein, um das Skript anzupassen, wenn neue Browserversionen herauskommen.

### Mobil, Tablet oder Desktop

Der häufigste Grund für das Durchführen von User-Agent-Sniffing ist es festzustellen, auf welchem Gerätetyp der Browser läuft. Das Ziel ist es, unterschiedliche HTML für unterschiedliche Gerätetypen bereitzustellen.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Besonders sollten Sie keine unterschiedlichen Standards für verschiedene Browser oder Rendering-Engines festlegen.
- Verwenden Sie niemals das Betriebssystem-Token, um festzulegen, ob ein Browser auf einem mobilen Gerät, einem Tablet oder einem Desktop läuft. Das Betriebssystem kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Handys).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter angeben, dass ihre Browser auf einem mobilen Gerät ausgeführt werden:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` innerhalb des Kommentars.          | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                           | `Opera Mobi/xyz`-Token innerhalb des Kommentars.          | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/`-Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammenfassend empfehlen wir, im User-Agent nach der Zeichenfolge `Mobi` zu suchen, um ein mobiles Gerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Seite bieten (die, wie als Best Practice, ohnehin Touch-Eingabe unterstützen sollte, da immer mehr Desktop-Maschinen mit Touchscreens auftauchen).
