---
title: Browser-Erkennung mit dem User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{HTTPSidebar}}

Unterschiedliche Webseiten oder Dienste für verschiedene Browser bereitzustellen, ist in der Regel eine schlechte Idee. Das Web soll für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich basierend auf der Verfügbarkeit von Features schrittweise verbessert, anstatt auf bestimmte Browser abzuzielen.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch einige Grenzfälle, in denen das Erkennen des Browsers notwendig ist. Mit dem User-Agent den Browser zu erkennen, sieht einfach aus, ist in Wirklichkeit jedoch ein sehr schwieriges Problem. Dieses Dokument wird Sie anleiten, dies so korrekt wie möglich zu tun.

> [!NOTE]
> Es ist erwähnenswert, dass es sehr selten eine gute Idee ist, User-Agent-Sniffing zu verwenden. Sie können fast immer einen besseren, breiter kompatiblen Weg finden, um Ihr Problem zu lösen!

## Überlegungen vor der Verwendung der Browser-Erkennung

Wenn Sie den User-Agent-String verwenden, um zu erkennen, welcher Browser verwendet wird, sollten Sie zunächst versuchen, dies zu vermeiden, wenn möglich. Beginnen Sie damit, zu identifizieren, **warum** Sie dies tun möchten.

- Versuchen Sie, einen bestimmten Fehler in einer Version eines Browsers zu umgehen?
  - : Suchen Sie oder fragen Sie in spezialisierten Foren: Es ist unwahrscheinlich, dass Sie der Erste sind, der auf dieses Problem stößt. Außerdem können Experten oder Personen mit einem anderen Blickwinkel Ihnen Ideen geben, um den Fehler zu umgehen. Wenn das Problem ungewöhnlich erscheint, lohnt es sich zu prüfen, ob dieser Fehler dem Browser-Anbieter über deren Fehlermeldesystem (z.B. [Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)) gemeldet wurde. Browser-Hersteller achten auf Fehlerberichte, und die Analyse kann Hinweise auf andere Workarounds für den Fehler geben.
- Versuchen Sie, das Vorhandensein eines bestimmten Features zu überprüfen?
  - : Ihre Seite muss ein bestimmtes Web-Feature verwenden, das einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer auf eine ältere Website leiten, die zwar weniger Features hat, aber funktioniert. Dies ist der schlechteste Grund für User-Agent-Erkennung, weil letztendlich alle anderen Browser aufholen werden. Außerdem ist es nicht praktikabel, jeden der weniger populären Browser und deren Web-Features zu testen. Sie sollten **niemals** User-Agent-Sniffing verwenden. Es gibt **immer** die Alternative, stattdessen einen Feature-Detection-Ansatz zu verwenden.
- Möchten Sie je nach verwendetem Browser unterschiedlichen HTML-Code bereitstellen?
  - : Dies ist normalerweise eine schlechte Praxis, es gibt jedoch einige Fälle, in denen dies notwendig ist. In diesen Fällen sollten Sie zuerst Ihre Situation analysieren, um sicherzustellen, dass es wirklich notwendig ist. Können Sie es verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Elemente hinzufügen? Die Schwierigkeit des erfolgreichen Einsatzes von User-Agent-Erkennung ist es wert, einige Beeinträchtigungen der Reinheit Ihres HTML zu akzeptieren. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder flüssige Layouts verwenden, um die Notwendigkeit zu beseitigen, dies zu tun?

## Vermeidung von User-Agent-Erkennung

Wenn Sie User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Feature-Erkennung

  - : Feature-Erkennung bedeutet, dass Sie nicht versuchen herauszufinden, welcher Browser Ihre Seite rendert, sondern stattdessen prüfen, ob das spezifische benötigte Feature verfügbar ist. Wenn nicht, verwenden Sie einen Fallback. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie, anstatt den User-Agent-String zu überprüfen, einen Test implementieren, um zu erkennen, wie der Browser die API implementiert und wie sie verwendet werden kann. Ein Beispiel für Feature-Erkennung ist folgendes. Im Jahr 2017 hat Chrome [experimentelle Lookbehind-Unterstützung in regulären Ausdrücken freigegeben](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte es. Man dachte vielleicht daran, dies zu tun:

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
Erstens nahm er an, dass alle User-Agent-Strings, die die Zeichenfolge "Chrome" enthalten, Chrome sind. UA-Strings sind notorisch irreführend.
Dann nahm er an, dass das Lookbehind-Feature immer verfügbar wäre, wenn der Browser Chrome war. Der Agent könnte eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder (weil das Feature zu der Zeit experimentell war) es könnte eine spätere Version von Chrome sein, die es entfernt hat.
Am wichtigsten war, dass keine anderen Browser das Feature unterstützen würden. Die Unterstützung hätte jederzeit zu anderen Browsern hinzugefügt werden können, aber dieser Code würde weiterhin den schlechteren Weg wählen.

Probleme wie diese können vermieden werden, indem die Unterstützung des Features selbst getestet wird:

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browser-Unterstützung ohne User-Agent-Sniffing zu testen. Es gibt **nie** einen Grund, den User-Agent-String dafür zu überprüfen.

Letztlich weisen die obigen Code-Snippets auf ein kritisches Problem beim plattformübergreifenden Codieren hin, das immer berücksichtigt werden muss. Verwenden Sie nicht versehentlich die API, die Sie in nicht unterstützten Browsern testen. Das klingt vielleicht offensichtlich und einfach, ist es aber manchmal nicht. Zum Beispiel würde die Verwendung von Lookbehind in Kurzregulärausdrucknotation (zum Beispiel `/reg/igm`) einen Parserfehler in nicht unterstützten Browsern verursachen. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` verwenden, selbst im Lookbehind unterstützten Abschnitt Ihres Codes.

- Progressive Verbesserung
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in "Schichten", mit einem Bottom-up-Ansatz, beginnend mit einer einfacheren Schicht und der schrittweisen Verbesserung der Möglichkeiten der Website in aufeinanderfolgenden Schichten, die jeweils mehr Funktionen verwenden.
- Gleitende Degradation
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und diese dann anpassen, um auch auf älteren Browsern zu funktionieren. Dies kann schwieriger und weniger effektiv sein als die progressive Verbesserung, kann aber in einigen Fällen nützlich sein.
- Mobilerkennungsgeräte

  - : Wahrscheinlich die häufigste Verwendung und der Missbrauch von User-Agent-Sniffing besteht darin, zu erkennen, ob das Gerät ein mobiles Gerät ist. Oft übersehen Menschen jedoch, wonach sie wirklich suchen. Menschen verwenden User-Agent-Sniffing, um zu erkennen, ob das Gerät des Benutzers touch-freundlich ist und einen kleinen Bildschirm hat, um ihre Website entsprechend zu optimieren. Obwohl User-Agent-Sniffing dies manchmal erkennen kann, sind nicht alle Geräte gleich: Einige mobile Geräte haben große Bildschirmgrößen, einige Desktops haben einen kleinen Touchscreen, einige Menschen verwenden Smart-TVs, die ein ganz anderes Spiel sind, und einige Menschen können die Breite und Höhe ihres Bildschirms dynamisch ändern, indem sie ihr Tablet auf die Seite drehen! Daher ist User-Agent-Sniffing definitiv nicht der Weg dorthin. Glücklicherweise gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints), um zu erkennen, ob das Gerät des Benutzers einen Touchscreen hat. Anschließend können Sie standardmäßig nur dann den User-Agent-Bildschirm überprüfen, `if (!("maxTouchPoints" in navigator)) { /* Code hier */ }`. Basierend auf der Information, ob das Gerät einen Touchscreen hat, ändern Sie nicht das gesamte Layout der Website nur für Touch-Geräte: Sie schaffen sich dadurch nur mehr Arbeit und Wartungsaufwand. Fügen Sie vielmehr Touch-Annehmlichkeiten hinzu, wie größere, leichter anklickbare Schaltflächen (das können Sie mit CSS tun, indem Sie die Schriftgröße erhöhen). Hier ist ein Beispiel für Code, der den Abstand von `#exampleButton` auf mobilen Geräten auf `1em` erhöht.

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

Was die Bildschirmgröße betrifft, verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Bildschirmgrößenabhängige Dinge aktualisieren */ })`. Was Sie mit der Bildschirmgröße machen wollen, ist nicht, Informationen auf kleineren Bildschirmen abzuschneiden. Das wird die Leute nur verärgern, weil sie die Desktop-Version verwenden müssen. Versuchen Sie vielmehr, auf kleineren Bildschirmen weniger Informationsspalten auf einer längeren Seite zu haben, während Sie auf größeren Bildschirmgrößen mehr Spalten mit einer kürzeren Seite haben. Dieser Effekt kann leicht mit CSS [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox) erreicht werden, manchmal mit [Floats](/de/docs/Learn/CSS/CSS_layout/Floats) als teilweiser Fallback.

Versuchen Sie auch weniger relevante/wichtige Informationen weiter unten unterzubringen und gruppieren Sie den Inhalt der Seite sinnvoll zusammen. Obwohl dies außerhalb des Themas liegt, könnten das folgende detaillierte Beispiel Ihnen Einsichten und Ideen geben, die Sie davon überzeugen, auf User-Agent-Sniffing zu verzichten. Nehmen wir eine Seite an, die aus Informationsboxen besteht; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, eine Übersicht und eine historische Anekdote. Die Bilder werden auf eine maximale vernünftige Größe beschränkt, selbst auf großen Bildschirmen. Zum Zwecke der sinnvollen Gruppierung des Inhalts sind alle Katzenboxen von allen Hunde-Boxen getrennt, sodass die Katzen- und Hunde-Boxen nicht zusammen gemischt sind. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den verschwendeten Raum links und rechts der Bilder zu reduzieren. Die Boxen können auf zwei gleich faire Weisen in mehrere Spalten aufgeteilt werden. Ab diesem Punkt nehmen wir an, dass alle Hunde-Boxen an der Spitze des Quellcodes sind, dass alle Katzen-Boxen am Ende des Quellcodes sind und dass alle diese Boxen das gleiche Elternelement haben. Es gibt natürlich eine einzelne Hunde-Box direkt über einer Katzen-Box. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox), um den Inhalt so zu gruppieren, dass, wenn die Seite dem Endnutzer angezeigt wird, alle Hunde-Boxen oben auf der Seite und alle Katzen-Boxen weiter unten auf der Seite sind. Die zweite Methode verwendet ein [Spaltenlayout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) und gruppiert alle Hunde links und alle Katzen rechts. Nur in diesem speziellen Szenario ist es angemessen, keine Rückfallebene für Flexboxen/Mehrspalten anzubieten, was zu einer einzelnen Spalte sehr breiter Boxen in alten Browsern führt. Überlegen Sie auch Folgendes. Wenn mehr Menschen die Webseite besuchen, um die Katzen zu sehen, dann könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, damit mehr Menschen auf kleineren Bildschirmen, wo der Inhalt auf eine Spalte reduziert wird, schneller finden, wonach sie suchen.

Machen Sie Ihren Code letztendlich immer dynamisch.
Der Benutzer kann sein mobiles Gerät auf die Seite drehen, wodurch sich die Breite und Höhe der Seite ändern.
Oder es könnte in der Zukunft ein seltsames Flip-Phone-ähnliches Gerät geben, bei dem das Aufklappen den Bildschirm erweitert.
Seien Sie nicht der Entwickler, der sich den Kopf über den Umgang mit dem Flip-Phone-ähnlichen Gerät bricht.
Seien Sie niemals mit Ihrer Webseite zufrieden, bis Sie das Dev-Tools-Seitenpanel öffnen und die Bildschirmgröße ändern können, während die Webseite glatt, flüssig und dynamisch aussieht.
Der einfachste Weg, dies zu erreichen, besteht darin, den gesamten Code, der Inhalte basierend auf der Bildschirmgröße bewegt, in eine einzige Funktion zu verschieben, die beim Laden der Seite und bei jedem [resize](/de/docs/Web/API/Window/resize_event)-Ereignis danach aufgerufen wird. Wenn es eine Menge gibt, die von dieser Layout-Funktion berechnet wird, bevor sie das neue Layout der Seite bestimmt, sollten Sie in Betracht ziehen, das Event-Listener-Debounce zu verwenden, sodass es nicht so oft aufgerufen wird.
Beachten Sie auch, dass ein großer Unterschied zwischen den Media Queries `(max-width: 25em)`, `not all and (min-width: 25em)` und `(max-width: 24.99em)` besteht: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einbezieht.
`(max-width: 24.99em)` ist ein schlechter Ersatz für `not all and (min-width: 25em)`: Verwenden Sie `(max-width: 24.99em)` nicht, weil das Layout _könnte_ bei sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten in der Zukunft brechen.
Seien Sie immer sehr bewusst bei der Wahl der richtigen Media Query und bei der Wahl der richtigen `>=`, `<=`, `>` oder `<` in jedem entsprechenden JavaScript, weil es sehr einfach ist, diese durcheinander zu bringen, was dazu führt, dass die Webseite an der Bildschirmgröße, an der das Layout wechselt, komisch aussieht.
Testen Sie die Webseite also gründlich bei den genauen Breiten/Höhen, bei denen Layoutwechsel auftreten, um sicherzustellen, dass die Layoutwechsel ordnungsgemäß erfolgen.

## Das Beste aus User-Agent-Sniffing machen

Nachdem Sie alle oben genannten besseren Alternativen zu User-Agent-Sniffing betrachtet haben, gibt es immer noch einige potenzielle Fälle, in denen User-Agent-Sniffing angemessen und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung von User-Agent-Sniffing als Fallback beim Erkennen, ob das Gerät einen Touchscreen hat. Weitere Informationen finden Sie im Abschnitt [Mobilerkennungsgeräte](#mobilerkennungsgeräte).

Ein weiterer solcher Fall ist das Beheben von Fehlern in Browsern, die sich nicht automatisch aktualisieren. Webkit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS, intern Webkit zu verwenden, sodass der Benutzer keine Möglichkeit hat, einen besseren, aktuelleren Browser auf älteren Geräten zu bekommen. Die meisten Fehler können erkannt werden, aber einige Fehler erfordern mehr Aufwand zur Erkennung als andere. In solchen Fällen kann es vorteilhaft sein, User-Agent-Sniffing zu verwenden, um die Leistung zu sparen. Zum Beispiel hat Webkit 6 einen Fehler, bei dem, wenn sich die Geräteausrichtung ändert, der Browser möglicherweise keine [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Listener auslöst, obwohl er das sollte. Um diesen Fehler zu überwinden, beachten Sie den folgenden Code.

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

## Welcher Teil des User-Agent enthält die Informationen, die Sie suchen?

Da es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings gibt, ist dies der knifflige Teil.

### Browsername und Version

Wenn Menschen sagen, dass sie "Browser-Erkennung" wollen, meinen sie oft eigentlich "Rendering-Engine-Erkennung". Wollen Sie tatsächlich Firefox erkennen, im Vergleich zu SeaMonkey, oder Chrome im Vergleich zu Chromium? Oder möchten Sie tatsächlich sehen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies das ist, was Sie benötigen, lesen Sie weiter unten auf der Seite.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Da der Name jedoch nicht die einzige Information in einem User-Agent-String ist, die in diesem Format vorliegt, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der gesuchte Name existiert. Beachten Sie jedoch, dass einige Browser lügen: Chrome beispielsweise gibt sowohl Chrome als auch Safari an. Um Safari zu erkennen, müssen Sie den Safari-String und das Fehlen des Chrome-Strings überprüfen; Chromium gibt sich oft auch als Chrome aus, oder Seamonkey gibt sich manchmal als Firefox aus.

Achten Sie auch darauf, keine einfache reguläre Ausdruck auf den BrowserName anzuwenden, da User-Agents auch Zeichenfolgen außerhalb der Keyword/Wert-Syntax enthalten. Safari und Chrome enthalten beispielsweise die Zeichenfolge 'like Gecko'.

| Browsername                        | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\[1] Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz`-Token und eine benutzerfreundliche in einem `Version/xyz`-Token.

Natürlich gibt es keine Garantie, dass ein anderer Browser nicht einige dieser Dinge übernimmt (wie Chrome in der Vergangenheit den Safari-String übernommen hat). Deshalb ist die Browser-Erkennung mit dem User-Agent-String unzuverlässig und sollte nur mit der Überprüfung der Versionsnummern durchgeführt werden (das Übernehmen älterer Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits erwähnt, ist das Erkennen der Rendering-Engine in den meisten Fällen der bessere Weg. Dies hilft dabei, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine teilen, werden eine Seite auf die gleiche Weise anzeigen: Es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive Haupt-Rendering-Engines: Blink, Gecko und WebKit. Da das Sniffing von Rendering-Engines gebräuchlich ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Daher ist es wichtig, darauf zu achten, dass keine Fehlalarme bei der Erkennung der Rendering-Engine ausgelöst werden.

| Engine   | Muss enthalten    | Kommentar                                                                                                                                                                                                              |
| -------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                                                        |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                                                        |
| WebKit   | `AppleWebKit/xyz` | Achten Sie darauf, dass WebKit-Browser eine 'like Gecko'-Zeichenfolge hinzufügen, die bei unvorsichtiger Erkennung zu Fehlalarmen bei Gecko führen kann.                                                               |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird ab Opera-Browser-Version 15 nicht mehr verwendet (siehe 'Blink').                                                                                                                                |
| EdgeHTML | `Edge/xyz`        | Die Nicht-Chromium-Version von Edge gibt die Engine-Version hinter dem _Edge/_-Token an, nicht die Applikationsversion. Veraltet; EdgeHTML wird ab Edge-Browser-Build-Version 79 nicht mehr verwendet (siehe 'Blink'). |

## Version der Rendering-Engine

Die meisten Rendering-Engines geben die Versionsnummer im Token _RenderingEngine/VersionNumber_ an, mit der bemerkenswerten Ausnahme von Gecko. Gecko stellt die Gecko-Versionsnummer im Kommentarteil des User-Agents nach dem `rv:`-String an. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version wird dieser Wert auch im `Gecko/version`-Token angegeben (frühere Versionen setzten dort das Build-Datum, dann ein festgelegtes Datum namens GeckoTrail).

## Betriebssystem

Das Betriebssystem wird in den meisten User-Agent-Strings angegeben (obwohl nicht in Web-fokussierten Plattformen wie Firefox OS), aber das Format variiert sehr. Es handelt sich um eine feste Zeichenfolge zwischen zwei Semikolons im Kommentarbereich des User-Agents. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das Betriebssystem an, oft auch dessen Version und Informationen über die zugrunde liegende Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM CPU-Architektur für Windows-PCs).

Wie in allen Fällen können sich diese Strings in Zukunft ändern, und man sollte sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden. Eine technologische Umfrage muss vorhanden sein, um das Skript anzupassen, wenn neue Browserversionen herauskommen.

### Mobil, Tablet oder Desktop

Der häufigste Grund für User-Agent-Sniffing besteht darin, zu bestimmen, auf welchem Gerätetyp der Browser läuft. Ziel ist es, unterschiedlichen HTML-Code an verschiedene Gerätetypen bereitzustellen.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Machen Sie insbesondere keine unterschiedlichen Standardeinstellungen für unterschiedliche Browser oder Rendering-Engines.
- Verwenden Sie niemals den OS-Token, um festzulegen, ob ein Browser auf Mobilgeräten, Tablets oder Desktops läuft. Das OS kann auf mehr als einem Gerätetyp ausgeführt werden (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browser-Anbieter angeben, dass ihre Browser auf einem mobilen Gerät ausgeführt werden:

| Browser                                                             | Regel                                                     | Beispiel                                                                                                                                                         |
| ------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                            | `Mobile` oder `Tablet` im Kommentarbereich.               | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                    | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge on Android) | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                          | `Opera Mobi/xyz`-Token im Kommentarbereich.               | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                          | `Mobile/xyz` und `Edge/`-Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammenfassend empfehlen wir die Suche nach der Zeichenkette `Mobi` irgendwo im User-Agent, um ein mobiles Gerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` gekennzeichnet ist, sollten Sie Ihre Desktop-Seite bereitstellen (die, aus best practice Gründen, Touch-Eingaben ohnehin unterstützen sollte, da zunehmend Desktop-Rechner mit Touchscreens ausgestattet werden).
