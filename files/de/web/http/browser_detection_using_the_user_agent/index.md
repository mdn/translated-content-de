---
title: Browser-Erkennung mit dem User Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{HTTPSidebar}}

Unterschiedliche Webseiten oder Dienste für verschiedene Browser bereitzustellen, ist in der Regel keine gute Idee. Das Web sollte für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie nutzen. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich auf der Grundlage der Verfügbarkeit von Funktionen schrittweise verbessert, anstatt gezielt bestimmte Browser zu adressieren.

Aber Browser und Standards sind nicht perfekt, und es gibt noch einige Sonderfälle, in denen eine Browser-Erkennung erforderlich ist. Den Browser anhand des User Agents zu erkennen, sieht einfach aus, ist aber in Wirklichkeit ein sehr schwieriges Problem. Dieses Dokument wird Sie dabei anleiten, dies so korrekt wie möglich zu tun.

> [!NOTE]
> Es lohnt sich zu betonen: Es ist selten eine gute Idee, eine Erkennung des User Agents zu nutzen. Sie können fast immer einen besseren, allgemein kompatibleren Weg finden, um Ihr Problem zu lösen!

## Überlegungen vor der Nutzung der Browser-Erkennung

Wenn Sie erwägen, die User-Agent-Zeichenkette zu nutzen, um zu erkennen, welcher Browser verwendet wird, ist Ihr erster Schritt, dies nach Möglichkeit zu vermeiden. Beginnen Sie damit zu analysieren, **warum** Sie es tun möchten.

- Versuchen Sie, einen bestimmten Fehler in einer Version eines Browsers zu umgehen?
  - : Schauen Sie oder fragen Sie in spezialisierten Foren: Es ist unwahrscheinlich, dass Sie der Erste sind, der dieses Problem hat. Experten oder Personen mit einem anderen Standpunkt können Ihnen Ideen geben, um den Fehler zu umgehen. Wenn das Problem selten vorkommt, ist es sinnvoll zu prüfen, ob dieser Fehler dem Browserhersteller über dessen System zur Fehlerverfolgung gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller achten auf Fehlerberichte, und die Analyse kann Hinweise auf andere Umgehungen des Fehlers geben.
- Versuchen Sie, das Vorhandensein einer bestimmten Funktion zu überprüfen?
  - : Ihre Website muss eine spezifische Web-Funktion nutzen, die einige Browser noch nicht unterstützen, und Sie möchten diese Nutzer zu einer älteren Website mit weniger Funktionen führen, von der Sie wissen, dass sie funktionieren wird. Dies ist der schlechteste Grund für die Verwendung der User-Agent-Erkennung, da wahrscheinlich alle anderen Browser irgendwann aufholen werden. Darüber hinaus ist es unpraktisch, jeden der weniger populären Browser zu testen und auf jene Webfunktionen zu prüfen. Sie sollten **nie** User-Agent-Erkennung verwenden. Es gibt **immer** die Alternative, eine Funktionsprüfung durchzuführen.
- Möchten Sie je nach verwendetem Browser unterschiedliche HTML-Inhalte bereitstellen?
  - : Dies ist normalerweise eine schlechte Praxis, jedoch gibt es einige Fälle, in denen dies erforderlich ist. In diesen Fällen sollten Sie zuerst Ihre Situation analysieren, um sicherzustellen, dass es wirklich notwendig ist. Können Sie dies verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} Elemente hinzufügen? Die Schwierigkeiten bei der erfolgreichen Nutzung der User-Agent-Erkennung sind einige Störungen in der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder flexible Layouts verwenden, um die Notwendigkeit zu beseitigen, dies zu tun?

## Vermeidung der User-Agent-Erkennung

Wenn Sie die Verwendung der User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Funktionsprüfung

  - : Die Funktionsprüfung versucht nicht zu ermitteln, welcher Browser Ihre Seite rendert, sondern prüft, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Wenn nicht, verwenden Sie einen Fallback. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie anstelle der Überprüfung der User-Agent-Zeichenkette einen Test implementieren, um zu ermitteln, wie der Browser die API implementiert und wie sie genutzt werden kann. Ein Beispiel für Funktionsprüfung ist folgendes. Im Jahr 2017 [hat Chrome experimentelle Lookbehind-Unterstützung in regulären Ausdrücken freigeschaltet](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser hat sie unterstützt. Sie könnten gedacht haben, dies auf folgende Weise zu tun:

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

Der obige Code würde mehrere falsche Annahmen treffen:
Zuerst wurde angenommen, dass alle User-Agent-Zeichenfolgen, die den Substring "Chrome" enthalten, auch tatsächlich Chrome sind. User-Agent-Zeichenfolgen sind notorisch irreführend.
Dann wurde angenommen, dass die Lookbehind-Funktion immer verfügbar wäre, wenn der Browser Chrome ist. Der Agent könnte eine ältere Version von Chrome sein, von bevor die Unterstützung hinzugefügt wurde, oder (weil die Funktion damals experimentell war) eine spätere Version von Chrome, die sie entfernt hat.
Am wichtigsten ist, dass angenommen wurde, dass keine anderen Browser die Funktion unterstützen würden. Andere Browser hätten jederzeit Unterstützung hinzufügen können, aber dieser Code hätte weiterhin den schlechteren Weg gewählt.

Solche Probleme können vermieden werden, indem man die Unterstützung der Funktion selbst testet:

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browserunterstützung ohne User-Agent-Erkennung zu testen. Es gibt **nie** einen Grund, die User-Agent-Zeichenkette dafür zu überprüfen.

Zuletzt bringen die oben genannten Code-Snippets ein kritisches Problem bei der plattformübergreifenden Codierung mit sich, das immer berücksichtigt werden muss. Vermeiden Sie es, die API, die Sie testen, in nicht unterstützten Browsern unbeabsichtigt zu verwenden. Dies mag offensichtlich und einfach erscheinen, ist es aber manchmal nicht. Zum Beispiel würde die Verwendung von Lookbehind in Kurznotations-Regulären-Ausdrücken (zum Beispiel `/reg/igm`) einen Parserfehler in nicht unterstützten Browsern verursachen. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` verwenden, selbst im Lookbehind unterstützten Abschnitt Ihres Codes.

- Progressive Verbesserung
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in "Schichten", unter Verwendung eines bottom-up-Ansatzes, beginnend mit einer einfacheren Schicht und Verbesserung der Fähigkeiten der Website in aufeinander folgenden Schichten, von denen jede mehr Funktionen verwendet.
- Anmutige Degradierung
  - : Dies ist ein top-down-Ansatz, bei dem Sie die bestmögliche Website mit allen Funktionen, die Sie möchten, erstellen und sie dann anpassen, um sie auf älteren Browsern funktionsfähig zu machen. Dies kann schwerer zu bewerkstelligen sein und weniger effektiv als progressive Verbesserung, aber in einigen Fällen nützlich sein.
- Mobile Geräte-Erkennung

  - : Wahrscheinlich die häufigste Verwendung und der Missbrauch der User-Agent-Erkennung ist die Feststellung, ob das Gerät mobil ist. Allerdings übersehen Menschen zu oft, was sie wirklich erreichen möchten. Menschen verwenden die User-Agent-Erkennung, um festzustellen, ob das Gerät des Benutzers berührungsempfindlich ist und einen kleinen Bildschirm hat, damit sie ihre Website entsprechend optimieren können. Während die User-Agent-Erkennung dies manchmal feststellen kann, sind nicht alle Geräte gleich: Einige mobile Geräte haben große Bildschirme, einige Desktops haben kleine Touchscreens, manche Menschen nutzen Smart-TVs, die ein ganz anderes Spiel sind, und manche Menschen können die Breite und Höhe ihres Bildschirms dynamisch durch das Umdrehen ihres Tablets ändern! Also ist die User-Agent-Erkennung definitiv nicht der richtige Weg. Glücklicherweise gibt es viel bessere Alternativen. Benutzen Sie [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints), um festzustellen, ob das Gerät des Benutzers einen Touchscreen hat. Dann, wenn `!("maxTouchPoints" in navigator)` gilt, verwenden Sie die User-Agent-Erkennung nur als Fallback. Wenn festgestellt wird, dass das Gerät einen Touchscreen hat, ändern Sie nicht das gesamte Layout der Website nur für Touchgeräte: Sie würden sich nur mehr Arbeit und Wartung aufladen. Fügen Sie vielmehr Berührungsannehmlichkeiten wie größere, leichter anklickbare Schaltflächen hinzu (das können Sie mit CSS tun, indem Sie die Schriftgröße erhöhen). Hier ist ein Beispiel für Code, der das Padding von `#exampleButton` auf `1em` bei mobilen Geräten erhöht.

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

Was die Bildschirmgröße betrifft, verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Bildschirmgrößenabhängige Maßnahmen erneuern */ })`. Was Sie für die Bildschirmgröße tun wollen, ist keine Informationen auf kleineren Bildschirmen abzuschneiden. Das wird die Leute nur ärgern, weil es sie dazu zwingt, die Desktop-Version zu nutzen. Versuchen Sie stattdessen, weniger Spalten von Informationen auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie mehr Spalten mit einer kürzeren Seite auf größeren Bildschirmgrößen haben. Dieser Effekt kann einfach mit CSS Flexboxen erreicht werden, manchmal mit Floats als teilweises Fallback.

Versuchen Sie auch, weniger relevante/wichtige Informationen nach unten zu verschieben und den Inhalt der Seite sinnvoll zu gruppieren. Obwohl es nicht das Thema ist, könnte das folgende detaillierte Beispiel Ihnen Einsichten und Ideen geben, die Sie dazu ermutigen könnten, auf die User-Agent-Erkennung zu verzichten. Nehmen wir an, eine Seite besteht aus Informationskästen; jeder Kasten handelt von einer anderen Katzen- oder Hunderasse. Jeder Kasten hat ein Bild, eine Übersicht und eine historische lustige Tatsache. Die Bilder sind auch auf großen Bildschirmen auf eine vernünftige Größe beschränkt. Um den Inhalt sinnvoll zu gruppieren, werden alle Katzenkästen von allen Hundekästen getrennt, sodass die Katzen- und Hundekästen nicht miteinander vermischt sind. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den verschwendeten Raum links und rechts der Bilder zu reduzieren. Die Kästen können durch zwei gleich faire Methoden in mehrere Spalten unterteilt werden. Von diesem Punkt an gehen wir davon aus, dass alle Hundekästen oben im Quellcode stehen, dass alle Katzenkästen unten im Quellcode stehen und dass all diese Kästen dasselbe übergeordnete Element haben. Natürlich gibt es eine einzelne Instanz eines Hundekastens unmittelbar über einem Katzenkasten. Die erste Methode nutzt horizontale [Flexboxen](/de/docs/Learn/CSS/CSS_layout/Flexbox), um den Inhalt zu gruppieren, sodass beim Anzeigen der Seite für den Endbenutzer alle Hundekästen oben auf der Seite sind und alle Katzenkästen weiter unten auf der Seite. Die zweite Methode nutzt ein [Spaltenlayout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) und platziert alle Hunde nach links und alle Katzen nach rechts. Nur in diesem besonderen Szenario ist es angemessen, kein Fallback für die Flexbox-/Mehrspaltenlayouts zu bieten, was zu einer einzigen Spalte sehr breiter Kästen auf alten Browsern führt. Beachten Sie auch Folgendes. Wenn mehr Leute die Webseite besuchen, um die Katzen zu sehen, könnte es eine gute Idee sein, alle Katzen höher im Quellcode als die Hunde zu platzieren, damit mehr Leute schneller finden können, wonach sie auf kleineren Bildschirmen suchen, auf denen der Inhalt auf eine Spalte zusammenfällt.

Als nächstes machen Sie Ihren Code immer dynamisch.
Der Benutzer kann sein mobiles Gerät umdrehen, wodurch sich die Breite und Höhe der Seite ändern.
Oder es könnte in der Zukunft ein merkwürdiges Klapphandy-ähnliches Gerät geben, bei dem das Ausklappen den Bildschirm verlängert.
Seien Sie nicht der Entwickler, der Kopfschmerzen hat, wie er mit dem klapphandy-ähnlichen Gerät umgehen soll.
Seien Sie nie zufrieden mit Ihrer Webseite, bis Sie das Dev-Tools-Seitenfenster öffnen und den Bildschirm ändern können, während die Webseite glatt, flüssig und dynamisch aussieht.
Der einfachste Weg, dies zu erreichen, ist, allen Code, der den Inhalt je nach Bildschirmgröße bewegt, in eine einzige Funktion zu verschieben, die beim Laden der Seite und bei jedem [Resize](/de/docs/Web/API/Window/resize_event)-Ereignis danach aufgerufen wird. Wenn durch diese Layout-Funktion vor der Bestimmung des neuen Layouts der Seite viel berechnet wird, dann sollten Sie das Event-Listener debouncen, sodass es nicht so oft aufgerufen wird.
Beachten Sie auch, dass es einen großen Unterschied zwischen den Media-Queries `(max-width: 25em)`, `not all and (min-width: 25em)` und `(max-width: 24.99em)` gibt: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einschließt.
`(max-width: 24.99em)` ist die arme Variante von `not all and (min-width: 25em)`: Verwenden Sie `(max-width: 24.99em)` nicht, da das Layout _möglicherweise_ bei sehr hohen Schriftgrößen auf sehr hochauflösenden Geräten in der Zukunft beschädigt wird.
Seien Sie immer sehr sorgfältig bei der Wahl der richtigen Media-Query und bei der Wahl von `>=`, `<=`, `>` oder `<` in jedem entsprechenden JavaScript, da es sehr leicht ist, diese durcheinander zu bringen, was dazu führt, dass die Webseite genau bei der Bildschirmgröße, bei der das Layout wechselt, merkwürdig aussieht.
Testen Sie daher die Webseite gründlich bei den genauen Breiten/Höhen, bei denen Layout-Wechsel auftreten, um sicherzustellen, dass die Layout-Wechsel korrekt verlaufen.

## Das Beste aus User-Agent-Erkennung machen

Nach der Überprüfung all der oben genannten besseren Alternativen zur User-Agent-Erkennung gibt es noch einige potenzielle Fälle, in denen die User-Agent-Erkennung angemessen und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung der User-Agent-Erkennung als Fallback beim Erkennen von Touchscreens. Siehe den Abschnitt [Mobile Geräte-Erkennung](#mobile_device_detection) für weitere Informationen.

Ein weiterer Fall betrifft das Beheben von Fehlern in Browsern, die sich nicht automatisch aktualisieren. WebKit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS, intern WebKit zu verwenden, daher hat der Benutzer keine Möglichkeit, auf älteren Geräten einen besseren, aktuelleren Browser zu erhalten. Die meisten Fehler können erfasst werden, aber einige Fehler erfordern mehr Aufwand für die Erkennung als andere. In solchen Fällen kann es vorteilhaft sein, die User-Agent-Erkennung zu verwenden, um die Leistung zu sparen. Ein Beispiel ist WebKit 6, bei dem es einen Fehler gibt, bei dem je nach Bildschirmorientierung Change-Listeners für [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) eventuell nicht ausgelöst werden, wenn sie sollten. Um diesen Fehler zu überwinden, beachten Sie den folgenden Code.

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

## Welcher Teil des User Agents enthält die von Ihnen gesuchten Informationen?

Da es keine Einheitlichkeit der verschiedenen Teile der User-Agent-Zeichenkette gibt, ist dies der knifflige Teil.

### Browsername und Version

Wenn Leute sagen, sie wollen "Browser-Erkennung", meinen sie oft eigentlich "Rendering-Engine-Erkennung". Möchten Sie tatsächlich Firefox erkennen, anstatt Seamonkey, oder Chrome anstatt Chromium? Oder möchten Sie tatsächlich sehen, ob der Browser die Gecko- oder WebKit-Rendering-Engine verwendet? Wenn dies das ist, was Sie benötigen, lesen Sie weiter unten auf der Seite.

Die meisten Browser setzen den Namen und die Version im Format _BrowserName/VersionNumber_. Da der Name jedoch nicht die einzige Information in einer User-Agent-Zeichenkette ist, die in diesem Format vorliegt, können Sie den Namen des Browsers nicht entdecken, Sie können nur überprüfen, ob der gesuchte Name existiert. Aber beachten Sie, dass einige Browser lügen: Chrome gibt zum Beispiel sowohl Chrome als auch Safari an. Daher müssen Sie, um Safari zu erkennen, die Safari-Zeichenkette und das Fehlen der Chrome-Zeichenkette überprüfen, Chromium gibt sich auch oft als Chrome aus oder Seamonkey manchmal als Firefox.

Achten Sie auch darauf, keinen einfachen regulären Ausdruck auf den Browsernamen zu verwenden, User Agents enthalten auch Zeichen außerhalb der Keyword/Value-Syntax. Safari & Chrome enthalten beispielsweise die Zeichenfolge 'like Gecko'.

| Browsername                | Muss enthalten  | Darf nicht enthalten             |
| -------------------------- | --------------- | -------------------------------- |
| Firefox                    | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                  | `Seamonkey/xyz` |                                  |
| Chrome                     | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                   | `Chromium/xyz`  |                                  |
| Safari                     | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basiert)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basiert) | `Opera/xyz`     |                                  |

\[1] Safari gibt zwei Versionsnummern an: eine technische in dem `Safari/xyz` Token und eine benutzerfreundliche in einem `Version/xyz` Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser einige dieser Dinge nicht hijackt (wie Chrome in der Vergangenheit den Safari-String hijackte). Deshalb ist die Browser-Erkennung unter Verwendung der User-Agent-Zeichenkette unzuverlässig und sollte nur mit Überprüfung der Versionsnummer durchgeführt werden (das Hijacking von alten Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie zuvor gesehen, ist es in den meisten Fällen besser, nach der Rendering-Engine zu suchen. Dies wird helfen, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine verwenden, zeigen eine Seite auf die gleiche Weise an: es ist oft eine faire Annahme, dass, was in einem funktioniert, auch in den anderen funktioniert.

Es gibt drei aktive Haupt-Rendering-Engines: Blink, Gecko und WebKit. Da das Erkennen der Rendering-Engines oft erfolgt, haben viele User Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Es ist daher wichtig, darauf zu achten, keine False-Positives zu verursachen, wenn Sie die Rendering-Engine erkennen.

| Engine   | Muss enthalten    | Kommentar                                                                                                                                                                                   |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                             |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                             |
| WebKit   | `AppleWebKit/xyz` | Achtung, WebKit-Browser fügen eine 'like Gecko'-Zeichenfolge hinzu, die zu False Positives für Gecko führen könnte, wenn die Erkennung nicht vorsichtig ist.                                |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird in Opera-Browser-Builds >= Version 15 nicht mehr verwendet (siehe 'Blink')                                                                                            |
| EdgeHTML | `Edge/xyz`        | Das nicht-Chromium Edge setzt seine Engine-Version nach dem _Edge/_ Token, nicht die Anwendungs-Version. Veraltet; EdgeHTML wird in Edge-Browser-Builds >= Version 79 nicht mehr verwendet. |

## Rendering-Engine-Version

Die meisten Rendering-Engines setzen die Versionsnummer im _RenderingEngine/VersionNumber_ Token, mit der bemerkenswerten Ausnahme von Gecko. Gecko setzt die Gecko-Versionsnummer im Kommentarbereich des User Agents nach dem `rv:` Token. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version wird dieser Wert auch im `Gecko/version` Token gesetzt (vorherige Versionen setzten dort das Build-Datum ein und dann ein festes Datum, das GeckoTrail genannt wurde).

## OS

Das Betriebssystem wird in den meisten User-Agent-Zeichenketten angegeben (obwohl nicht plattformorientierte Plattformen wie Firefox OS), aber das Format variiert stark. Es ist eine feste Zeichenfolge zwischen zwei Semikolons, im Kommentarbereich des User Agents. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das Betriebssystem an, enthalten aber auch oft Informationen zur zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac, oder x86/ARM-CPU-Architektur für Windows-PCs).

Wie in allen Fällen, können sich diese Zeichenfolgen in Zukunft ändern. Sie sollten sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwenden. Eine technologische Analyse muss vorhanden sein, um das Script anzupassen, wenn neue Browser-Versionen veröffentlicht werden.

### Mobil, Tablet oder Desktop

Der häufigste Grund für das Durchführen einer User-Agent-Erkennung ist, festzustellen, auf welchem Gerät der Browser läuft. Das Ziel ist es, verschiedenen HTML für unterschiedliche Gerätetypen zu liefern.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp läuft. Machen Sie insbesondere keine unterschiedlichen Voreinstellungen für verschiedene Browser oder Rendering-Engines.
- Verwenden Sie niemals das OS-Token, um festzustellen, ob ein Browser auf einem mobilen Gerät, einem Tablet oder einem Desktop läuft. Das OS kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android auf Tablets sowie auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter angeben, dass ihre Browser auf einem mobilen Gerät laufen:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` innerhalb des Kommentars.          | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari` Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                           | `Opera Mobi/xyz` Token innerhalb des Kommentars.          | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammengefasst empfehlen wir, in der User-Agent-Zeichenkette nach der Zeichenfolge `Mobi` zu suchen, um ein Mobilgerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Site anbieten (die als Best Practice ohnehin Touch-Eingaben unterstützen sollte, da immer mehr Desktop-Maschinen mit Touchscreens ausgestattet sind).
