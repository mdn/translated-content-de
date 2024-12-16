---
title: Browser-Erkennung mit dem User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

Unterschiedliche Webseiten oder Dienste für verschiedene Browser bereitzustellen, ist normalerweise eine schlechte Idee. Das Web soll für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich basierend auf der Verfügbarkeit von Funktionen fortlaufend verbessert, anstatt auf bestimmte Browser abzuzielen.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch einige Sonderfälle, in denen die Erkennung des Browsers erforderlich ist. Die Verwendung des User-Agents zur Erkennung des Browsers sieht einfach aus, ist aber tatsächlich ein sehr schwieriges Problem. Dieses Dokument wird Sie dabei unterstützen, es so korrekt wie möglich zu tun.

> [!NOTE]
> Es lohnt sich, noch einmal zu betonen: Es ist nur sehr selten eine gute Idee, User-Agent-Erkennung zu verwenden. Sie können fast immer einen besseren, breiter kompatiblen Weg finden, Ihr Problem zu lösen!

## Überlegungen, bevor Sie die Browser-Erkennung verwenden

Wenn Sie erwägen, die User-Agent-Zeichenkette zu verwenden, um zu erkennen, welcher Browser verwendet wird, ist Ihr erster Schritt, dies zu vermeiden, wenn möglich. Beginnen Sie damit zu ermitteln, **warum** Sie dies tun möchten.

- Versuchen Sie, einen bestimmten Fehler in einer bestimmten Version eines Browsers zu umgehen?
  - : Schauen oder fragen Sie in spezialisierten Foren: Es ist unwahrscheinlich, dass Sie die ersten sind, die auf dieses Problem stoßen. Außerdem können Experten oder Personen mit einem anderen Blickwinkel Ihnen Ideen geben, wie Sie den Fehler umgehen können. Wenn das Problem ungewöhnlich erscheint, lohnt es sich zu prüfen, ob dieser Fehler dem Browser-Anbieter über ihr Fehlerverfolgungssystem gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller achten auf Fehlerberichte, und die Analyse könnte Hinweise auf andere Umgehungsmöglichkeiten des Fehlers geben.
- Versuchen Sie, die Existenz einer bestimmten Funktion zu überprüfen?
  - : Ihre Website muss eine spezifische Web-Funktion verwenden, die einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer auf eine ältere Seite mit weniger Funktionen schicken, die jedoch funktioniert. Dies ist der schlechteste Grund, um User-Agent-Erkennung zu verwenden, da mit großer Wahrscheinlichkeit irgendwann alle anderen Browser aufholen werden. Zudem ist es nicht praktikabel, jeden der weniger populären Browser zu testen und auf diese Web-Funktionen zu prüfen. Sie sollten **niemals** User-Agent-Erkennung verwenden. Es gibt **immer** die Alternative, stattdessen Funktions-Erkennung zu verwenden.
- Möchten Sie je nach verwendetem Browser unterschiedliche HTML bereitstellen?
  - : Dies ist normalerweise eine schlechte Praxis, aber es gibt einige Fälle, in denen es notwendig ist. In diesen Fällen sollten Sie zunächst Ihre Situation analysieren, um sicherzustellen, dass es wirklich notwendig ist. Können Sie dies verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen? Die Schwierigkeit, die User-Agent-Erkennung erfolgreich zu verwenden, ist einige Unterbrechungen der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserungen oder flüssige Layouts verwenden, um die Notwendigkeit dazu zu vermeiden?

## Vermeidung der User-Agent-Erkennung

Wenn Sie die User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Funktions-Erkennung

  - : Funktions-Erkennung bedeutet, dass Sie nicht versuchen, herauszufinden, welcher Browser Ihre Seite rendert, sondern stattdessen prüfen, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Ist dies nicht der Fall, verwenden Sie eine Alternative. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie statt der Überprüfung der User-Agent-Zeichenkette einen Test implementieren, um zu erkennen, wie der Browser die API implementiert und wie Sie sie verwenden können. Ein Beispiel für Funktions-Erkennung ist wie folgt. 2017 [entfernte Chrome das experimentelle Lookbehind-Support-Flag in regulären Ausdrücken](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte es. Daher könnten Sie gedacht haben, dies zu tun:

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
Zuerst wurde angenommen, dass alle User-Agent-Zeichenketten, die den Teilstring "Chrome" enthalten, zu Chrome gehören. UA-Zeichenketten sind berüchtigt dafür, irreführend zu sein.
Dann wurde angenommen, dass die Lookbehind-Funktion immer verfügbar ist, wenn der Browser Chrome ist. Der Agent könnte eine ältere Version von Chrome sein, bevor die Unterstützung hinzugefügt wurde, oder (da die Funktion damals experimentell war) es könnte eine spätere Version von Chrome sein, die sie entfernt hat.
Am wichtigsten ist, dass angenommen wurde, dass keine anderen Browser die Funktion unterstützen würden. Die Unterstützung hätte jederzeit zu anderen Browsern hinzugefügt werden können, aber dieser Code hätte weiterhin den minderwertigen Pfad gewählt.

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browser-Unterstützung ohne User-Agent-Erkennung zu testen. Es gibt **nie** einen Grund, die User-Agent-Zeichenkette dafür zu überprüfen.

Zuletzt bringen die obigen Code-Schnipsel ein kritisches Problem bei der plattformübergreifenden Kodierung mit sich, das immer berücksichtigt werden muss. Verwenden Sie nicht unbeabsichtigt die API, die Sie in nicht unterstützten Browsern testen. Dies mag offensichtlich und einfach erscheinen, aber manchmal ist es das nicht. Zum Beispiel verursacht die Verwendung von Lookbehind in Kurz-Regex-Notation (zum Beispiel `/reg/igm`) in nicht unterstützten Browsern einen Parser-Fehler. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` verwenden, selbst im Abschnitt des Codes, in dem Lookbehind unterstützt wird.

- Progressive Verbesserung
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in 'Schichten', wobei ein Bottom-up-Ansatz verwendet wird, beginnend mit einer einfacheren Schicht und Verbesserungen der Fähigkeiten der Website in aufeinanderfolgenden Schichten, jede mit mehr Funktionen.
- Sanfte Verschlechterung
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und dann anpassen, um sie auf älteren Browsern funktionsfähig zu machen. Dies kann schwieriger sein und weniger effektiv als progressive Verbesserung, aber in einigen Fällen nützlich sein.
- Erkennung von Mobilgeräten

  - : Die wohl häufigste Nutzung und der Missbrauch der User-Agent-Erkennung besteht darin, zu erkennen, ob das Gerät ein Mobilgerät ist. Allerdings übersehen Menschen zu oft, was sie wirklich erreichen wollen. Menschen verwenden die User-Agent-Erkennung, um festzustellen, ob das Gerät des Benutzers berührungsfreundlich ist und einen kleinen Bildschirm hat, um ihre Website entsprechend zu optimieren. Auch wenn die User-Agent-Erkennung dies manchmal feststellen kann, sind nicht alle Geräte gleich: Einige Mobilgeräte haben große Bildschirmgrößen, einige Desktops haben einen kleinen Touchscreen, einige Leute verwenden Smart-TVs, die eine völlig andere Angelegenheit sind, und einige Leute können die Breite und Höhe ihres Bildschirms dynamisch ändern, indem sie ihr Tablet seitlich drehen! Daher ist die User-Agent-Erkennung definitiv nicht der richtige Weg. Glücklicherweise gibt es viel bessere Alternativen. Verwenden Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints), um festzustellen, ob das Gerät des Benutzers einen Touchscreen hat. Falls diese Information fehlt, greifen Sie auf die Überprüfung der User-Agent-Zeichenfolge nur `if (!("maxTouchPoints" in navigator)) { /* Code hier */ }` zurück. Verwenden Sie diese Information, ob das Gerät einen Touchscreen hat, jedoch nicht, um das gesamte Layout der Website nur für Touch-Geräte zu ändern: Sie schaffen nur mehr Arbeit und Wartung für sich selbst. Fügen Sie stattdessen Annehmlichkeiten für die Berührung hinzu, wie größere, leicht anklickbare Schaltflächen (Sie können dies mit CSS tun, indem Sie die Schriftgröße erhöhen). Hier ist ein Beispiel für Code, der das Padding von `#exampleButton` auf `1em` auf Mobilgeräten erhöht.

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

Was die Bildschirmgröße betrifft, verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Bildschirmgrößenabhängige Dinge aktualisieren */ })`. Sie möchten nicht Informationen auf kleineren Bildschirmen abschneiden. Das wird die Leute nur ärgern, da es sie zwingt, die Desktop-Version zu verwenden. Versuchen Sie stattdessen, weniger Spalten von Informationen auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie mehr Spalten mit einer kürzeren Seite auf größeren Bildschirmen haben. Dieser Effekt kann leicht mit CSS [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox) und manchmal mit [Floats](/de/docs/Learn/CSS/CSS_layout/Floats) als partielles Fallback erreicht werden.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und die Inhalte der Seite sinnvoll zu gruppieren. Auch wenn es vom Thema abweicht, könnte Ihnen das folgende detaillierte Beispiel Einsichten und Ideen geben, die Sie dazu bewegen, auf User-Agent-Erkennung zu verzichten. Stellen Sie sich eine Seite vor, die aus Informationsboxen besteht; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, eine Übersicht und eine historische interessante Tatsache. Die Bilder sind auf eine maximal angemessene Größe selbst auf großen Bildschirmen beschränkt. Zum Zwecke der sinnvollen Gruppierung der Inhalte sind alle Katzenboxen von allen Hundeboxen getrennt, sodass die Katzen- und Hundeboxen nicht miteinander vermischt sind. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den Platz links und rechts von den Bildern zu reduzieren. Die Boxen können auf zwei gleich faire Methoden in mehrere Spalten unterteilt werden. Von diesem Punkt an nehmen wir an, dass alle Hundeboxen am oberen Rand des Quellcodes stehen, alle Katzenboxen am unteren Rand des Quellcodes stehen und all diese Boxen dasselbe Elternelement haben. Natürlich gibt es eine einzige Instanz einer Hundebox direkt über einer Katzenbox. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox), um die Inhalte so zu gruppieren, dass beim Endbenutzer alle Hundeboxen oben auf der Seite und alle Katzenboxen weiter unten angezeigt werden. Die zweite Methode verwendet ein [Spaltenlayout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) und bringt alle Hunde nach links und alle Katzen nach rechts. Nur in diesem speziellen Szenario ist es angebracht, kein Fallback für die Flexbox-/Mehrspaltenlayouts bereitzustellen, was zu einer einzigen Spalte sehr breiter Boxen in alten Browsern führt. Erwägen Sie auch Folgendes. Wenn mehr Menschen die Webseite besuchen, um die Katzen zu sehen, könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, damit mehr Menschen auf kleineren Bildschirmen, auf denen die Inhalte zu einer Spalte zusammenbrechen, schneller finden, wonach sie suchen.

Als Nächstes, machen Sie Ihren Code immer dynamisch.
Der Benutzer kann sein Mobilgerät seitlich drehen, wodurch sich die Breite und Höhe der Seite ändern.
Oder es könnte in der Zukunft so etwas wie ein seltsames Klapphandy-Gerät geben, bei dem das Aufklappen den Bildschirm vergrößert.
Seien Sie nicht der Entwickler, der mit Kopfschmerzen darüber nachdenkt, wie man mit dem Klapphandy-Gerät umgeht.
Seien Sie nie zufrieden mit Ihrer Webseite, bis Sie das Entwicklertools-Seitenfeld öffnen und die Bildschirmgröße ändern können, während die Webseite glatt, flüssig und dynamisch groß erscheint.
Der einfachste Weg, dies zu erreichen, besteht darin, den gesamten Code, der Inhalte basierend auf der Bildschirmgröße verschiebt, in eine einzige Funktion zu trennen, die aufgerufen wird, wenn die Seite geladen wird und bei jedem [Resize](/de/docs/Web/API/Window/resize_event)-Ereignis danach. Wenn durch diese Layout-Funktion viel berechnet wird, bevor sie das neue Layout der Seite bestimmt, sollten Sie das Event-Listener {{Glossary("debounce", "Debouncing")}} in Betracht ziehen, sodass es nicht so oft aufgerufen wird.
Beachten Sie auch, dass es einen großen Unterschied zwischen den Medienabfragen `(max-width: 25em)`, `not all and (min-width: 25em)` und `(max-width: 24.99em)` gibt: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einschließt.
`(max-width: 24.99em)` ist eine behelfsmäßige Version von `not all and (min-width: 25em)`: Verwenden Sie `(max-width: 24.99em)` nicht, da das Layout _möglicherweise_ bei sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten in der Zukunft kaputt geht.
Seien Sie immer sehr bedacht darauf, die richtige Medienabfrage und die richtigen `>=`, `<=`, `>`, oder `<` in jedem entsprechenden JavaScript zu wählen, weil es sehr einfach ist, diese zu verwechseln, was dazu führt, dass die Website genau an der Bildschirmgröße, bei der das Layout wechselt, seltsam aussieht.
Testen Sie daher die Website gründlich bei den genauen Breiten/Höhen, bei denen Layout-Wechsel stattfinden, um sicherzustellen, dass die Layout-Wechsel ordnungsgemäß erfolgen.

## Das Beste aus der User-Agent-Erkennung machen

Nachdem Sie alle oben genannten besseren Alternativen zur User-Agent-Erkennung überprüft haben, gibt es immer noch einige potenzielle Fälle, in denen die User-Agent-Erkennung angemessen und gerechtfertigt ist.

Einer dieser Fälle ist die Verwendung der User-Agent-Erkennung als Fallback, wenn festgestellt werden soll, ob das Gerät einen Touchscreen hat. Weitere Informationen finden Sie im Abschnitt [Erkennung von Mobilgeräten](#mobile_device_detection).

Ein weiterer solcher Fall ist die Behebung von Fehlern in Browsern, die sich nicht automatisch aktualisieren. WebKit (unter iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS, intern WebKit zu verwenden, daher hat der Benutzer keine Möglichkeit, einen besseren Browser auf älteren Geräten zu bekommen. Die meisten Fehler können erkannt werden, aber einige Fehler erfordern mehr Aufwand zur Erkennung als andere. In solchen Fällen kann es von Vorteil sein, User-Agent-Erkennung zu verwenden, um die Leistung zu verbessern. WebKit 6 hat zum Beispiel einen Fehler, bei dem beim Wechsel der Geräteausrichtung die [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Listener möglicherweise nicht ausgelöst werden, wenn sie es sollten. Um diesen Fehler zu beheben, beachten Sie den folgenden Code.

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

Da es keine Einheitlichkeit der verschiedenen Teile der User-Agent-Zeichenfolge gibt, ist dies der schwierige Teil.

### Browsername und -version

Wenn Leute sagen, sie möchten "Browser-Erkennung", wollen sie oft tatsächlich "Rendering-Engine-Erkennung". Wollen Sie wirklich Firefox erkennen, im Gegensatz zu SeaMonkey, oder Chrome im Gegensatz zu Chromium? Oder wollen Sie tatsächlich sehen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies der Fall ist, sehen Sie weiter unten auf dieser Seite.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Da aber der Name nicht die einzige Information ist, die in einer User-Agent-Zeichenkette in diesem Format vorliegt, können Sie nicht den Namen des Browsers herausfinden, Sie können nur überprüfen, ob der Name, den Sie suchen, existiert. Beachten Sie jedoch, dass einige Browser lügen: Chrome beispielsweise meldet sich sowohl als Chrome als auch als Safari. Um Safari zu erkennen, müssen Sie nach dem Safari-String und dem Fehlen des Chrome-Strings suchen, Chromium meldet sich oft auch als Chrome oder Seamonkey manchmal als Firefox.

Achten Sie auch darauf, keinen einfachen regulären Ausdruck auf den Browsername zu verwenden, User-Agents enthalten auch Zeichenketten außerhalb der Keyword/Wert-Syntax. Safari & Chrome enthalten zum Beispiel die Zeichenfolge 'like Gecko'.

| Browsername                        | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\[1] Safari liefert zwei Versionsnummern: eine technische im `Safari/xyz` Token und eine benutzerfreundliche in einem `Version/xyz` Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser nicht einige dieser Dinge übernimmt (wie Chrome in der Vergangenheit den Safari-String übernommen hat). Deshalb ist die Browsererkennung mittels der User-Agent-Zeichenfolge unzuverlässig und sollte nur mit der Prüfung der Versionsnummer erfolgen (das Übernehmen von vergangenen Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits erwähnt, ist es in den meisten Fällen besser, nach der Rendering-Engine zu suchen. Dies hilft, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine verwenden, zeigen eine Seite auf die gleiche Weise an: Es ist oft eine faire Annahme, dass das, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive große Rendering-Engines: Blink, Gecko und WebKit. Da das Erkennen der Rendering-Engine verbreitet ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um Erkennung zu provozieren. Deshalb ist es wichtig, darauf zu achten, keine falsch-positiven Ergebnisse bei der Erkennung der Rendering-Engine zu provozieren.

| Engine   | Muss enthalten    | Kommentar                                                                                                                                                                                                       |
| -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                                                 |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                                                 |
| WebKit   | `AppleWebKit/xyz` | Achtung, WebKit-Browser fügen einen 'like Gecko'-String hinzu, der möglicherweise zu falsch-positiven Ergebnissen für Gecko führt, wenn die Erkennung nicht sorgfältig durchgeführt wird.                       |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink').                                                                                                               |
| EdgeHTML | `Edge/xyz`        | Der nicht-Chromium Edge platziert seine Engine-Version nach dem _Edge/_ Token, nicht die Anwendungs-Version. Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet (siehe 'Blink'). |

## Rendering-Engine-Version

Die meisten Rendering-Engines platzieren die Versionsnummer im _RenderingEngine/VersionNumber_ Token, mit der bemerkenswerten Ausnahme von Gecko. Gecko platziert die Gecko-Versionsnummer im Kommentarteil des User-Agents nach dem `rv:` String. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version platziert es diesen Wert auch im `Gecko/version` Token (in vorherigen Versionen wurde dort das Build-Datum und dann ein festes Datum, die GeckoTrail genannt, platziert).

## Betriebssystem

Das Betriebssystem wird in den meisten User-Agent-Zeichenketten angegeben (obwohl nicht bei webfokussierten Plattformen wie Firefox OS), aber das Format variiert stark. Es ist eine feste Zeichenfolge zwischen zwei Semikolons im Kommentarteil des User-Agents. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das Betriebssystem an, aber oft auch dessen Version und Informationen zur zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Macs oder x86/ARM CPU-Architektur für Windows-PCs).

Wie in allen Fällen können sich diese Zeichenfolgen in der Zukunft ändern, man sollte sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden. Eine technologische Überwachung muss stattfinden, um das Skript anzupassen, wenn neue Browserversionen herauskommen.

### Mobil, Tablet oder Desktop

Der häufigste Grund zur Durchführung von User-Agent-Erkennung ist die Feststellung, auf welchem Gerät der Browser läuft. Das Ziel ist es, unterschiedlichen HTML an verschiedene Gerätetypen zu liefern.

- Nehmen Sie niemals an, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Besonders machen Sie keine unterschiedlichen Vorgaben für unterschiedliche Browser oder Rendering-Engines.
- Verwenden Sie niemals den OS-Token, um zu definieren, ob ein Browser auf Mobilgeräten, Tablets oder Desktops läuft. Das OS kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Handys).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter angeben, dass ihre Browser auf einem Mobilgerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` innerhalb des Kommentars.          | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                           | `Opera Mobi/xyz` Token innerhalb des Kommentars.          | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammenfassend empfehlen wir, nach der Zeichenfolge `Mobi` irgendwo im User-Agent zu suchen, um ein Mobilgerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Site bereitstellen (die als Best Practice sowieso Touch-Eingaben unterstützen sollte, da immer mehr Desktop-Maschinen mit Touchscreens ausgestattet sind).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Client_hints)
- [Implementierung der Funktions-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
