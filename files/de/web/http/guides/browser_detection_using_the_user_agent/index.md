---
title: Browsenerkennung mithilfe des User-Agent
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

Das Bereitstellen unterschiedlicher Webseiten oder Dienste für verschiedene Browser ist in der Regel keine gute Idee. Das Web soll für alle zugänglich sein, unabhängig davon, welchen Browser oder welches Gerät sie verwenden. Es gibt Möglichkeiten, Ihre Website so zu entwickeln, dass sie sich progressiv verbessert, basierend auf der Verfügbarkeit von Funktionen, anstatt gezielt auf bestimmte Browser zu zielen.

Aber Browser und Standards sind nicht perfekt, und es gibt immer noch einige Randfälle, in denen die Erkennung des Browsers erforderlich ist. Die Verwendung des User-Agent zur Erkennung des Browsers sieht einfach aus, aber es richtig zu machen, ist tatsächlich ein sehr schwieriges Problem. Dieses Dokument wird Sie dabei anleiten, dies so korrekt wie möglich zu tun.

> [!NOTE]
> Es ist erwähnenswert: Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden. Sie können fast immer eine bessere, breiter kompatible Möglichkeit finden, Ihr Problem zu lösen!

## Überlegungen vor der Verwendung der Browsenerkennung

Wenn Sie in Betracht ziehen, den User-Agent-String zu verwenden, um zu erkennen, welcher Browser verwendet wird, ist Ihr erster Schritt, dies nach Möglichkeit zu vermeiden. Beginnen Sie damit, zu versuchen, **warum** Sie dies tun möchten, zu identifizieren.

- Versuchen Sie, einen bestimmten Fehler in einer bestimmten Browserversion zu umgehen?
  - : Schauen oder fragen Sie in spezialisierten Foren: Es ist unwahrscheinlich, dass Sie die erste Person sind, die auf dieses Problem stößt. Experten oder Personen mit einem anderen Standpunkt können Ihnen Ideen zur Umgehung des Fehlers geben. Wenn das Problem ungewöhnlich erscheint, lohnt es sich zu überprüfen, ob dieser Bug dem Browseranbieter über ihr Bug-Tracking-System gemeldet wurde ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser-Hersteller achten auf Fehlerberichte, und die Analyse kann Hinweise auf andere Workarounds für den Fehler geben.
- Versuchen Sie, das Vorhandensein einer bestimmten Funktion zu überprüfen?
  - : Ihre Seite muss eine bestimmte Webfunktion verwenden, die einige Browser noch nicht unterstützen, und Sie möchten diese Benutzer zu einer älteren Website mit weniger Funktionen schicken, die Sie jedoch kennen und die funktionieren wird. Dies ist der schlechteste Grund, um User-Agent-Erkennung zu verwenden, da letztendlich alle anderen Browser aufholen werden. Darüber hinaus ist es nicht praktikabel, alle weniger populären Browser zu testen und diese Webfunktionen zu testen. Sie sollten **niemals** User-Agent-Sniffing betreiben. Es gibt **immer** die Alternative, stattdessen Funktions-Erkennung zu verwenden.
- Möchten Sie je nach verwendetem Browser unterschiedlichen HTML-Code bereitstellen?
  - : Dies ist in der Regel eine schlechte Praxis, aber es gibt einige Fälle, in denen dies notwendig ist. In diesen Fällen sollten Sie zunächst Ihre Situation analysieren, um sicherzustellen, dass es wirklich notwendig ist. Können Sie es verhindern, indem Sie einige nicht-semantische {{ HTMLElement("div") }} oder {{ HTMLElement("span") }}-Elemente hinzufügen? Die Schwierigkeit, User-Agent-Erkennung erfolgreich zu nutzen, ist ein paar Störungen in der Reinheit Ihres HTML wert. Überdenken Sie auch Ihr Design: Können Sie progressive Verbesserung oder flüssige Layouts verwenden, um die Notwendigkeit zu beseitigen?

## Vermeidung von User-Agent-Erkennung

Wenn Sie die Verwendung von User-Agent-Erkennung vermeiden möchten, haben Sie Optionen!

- Funktions-Erkennung

  - : Funktions-Erkennung bedeutet, dass Sie nicht versuchen zu bestimmen, welcher Browser Ihre Seite rendert, sondern stattdessen prüfen, ob die spezifische Funktion, die Sie benötigen, verfügbar ist. Wenn nicht, verwenden Sie eine Fallback-Lösung. In den seltenen Fällen, in denen sich das Verhalten zwischen Browsern unterscheidet, sollten Sie anstelle der Überprüfung des User-Agent-Strings einen Test implementieren, um zu erkennen, wie der Browser die API implementiert, und daraus ableiten, wie Sie sie nutzen können. Ein Beispiel für Funktions-Erkennung ist das folgende. Im Jahr 2017 hat Chrome [experimentelle Lookbehind-Unterstützung in regulären Ausdrücken ohne Flag eingeführt](https://chromestatus.com/feature/5668726032564224), aber kein anderer Browser unterstützte sie. Also könnten Sie gedacht haben, das folgendermaßen zu tun:

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
Zuerst setzte er voraus, dass alle User-Agent-Strings, die den Substring "Chrome" enthalten, Chrome sind. UA-Strings sind notorisch irreführend.
Dann ging er davon aus, dass das Lookbehind-Feature immer verfügbar wäre, wenn der Browser Chrome war. Der Agent könnte eine ältere Version von Chrome sein, von bevor die Unterstützung hinzugefügt wurde, oder (weil das Feature zu der Zeit experimentell war) es könnte eine spätere Version von Chrome sein, die es entfernt hat.
Am wichtigsten, er setzte voraus, dass keine anderen Browser das Feature unterstützen würden. Die Unterstützung hätte jederzeit zu anderen Browsern hinzugefügt werden können, aber dieser Code hätte weiterhin den minderwertigen Pfad gewählt.

Solche Probleme können vermieden werden, indem die Unterstützung des Features selbst getestet wird:

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

Wie der obige Code zeigt, gibt es **immer** eine Möglichkeit, die Browser-Unterstützung zu testen, ohne User-Agent-Sniffing zu verwenden. Es gibt **nie** einen Grund, den User-Agent-String für dies zu überprüfen.

Zum Schluss bringen die obigen Code-Snippets ein kritisches Problem beim Cross-Browser-Coding mit sich, das immer berücksichtigt werden muss. Verwenden Sie die API, die Sie testen, nicht unabsichtlich in nicht unterstützten Browsern. Das mag offensichtlich und einfach klingen, aber manchmal ist es das nicht. Zum Beispiel würde die Verwendung von Lookbehind in der Kurz-Regexp-Notation (zum Beispiel `/reg/igm`) in nicht unterstützten Browsern einen Parserfehler verursachen. Daher würden Sie im obigen Beispiel `new RegExp("(?<=look_behind_stuff)");` anstelle von `/(?<=look_behind_stuff)/` verwenden, sogar im Lookbehind-unterstützten Abschnitt Ihres Codes.

- Progressive Verbesserung
  - : Diese Designtechnik beinhaltet die Entwicklung Ihrer Website in "Schichten", wobei ein Bottom-up-Ansatz verwendet wird, beginnend mit einer einfacheren Schicht und die Fähigkeiten der Website in aufeinanderfolgenden Schichten, die jeweils mehr Funktionen nutzen, zu verbessern.
- Stufenweise Degradierung
  - : Dies ist ein Top-down-Ansatz, bei dem Sie die bestmögliche Website mit allen gewünschten Funktionen erstellen und diese dann anpassen, damit sie auf älteren Browsern funktioniert. Dies kann schwieriger sein und weniger effektiv als progressive Verbesserung, aber in einigen Fällen nützlich sein.
- Mobilerkennungsgerät

  - : Arguably the most common use and misuse of user agent sniffing is to detect if the device is a mobile device. However, people too often overlook what they are really after. People use user agent sniffing to detect if the users' device is touch-friendly and has a small screen so they can optimize their website accordingly. While user agent sniffing can sometimes detect these, not all devices are the same: some mobile devices have big screen sizes, some desktops have a small touchscreen, some people use smart TVs, which are an entirely different ballgame altogether, and some people can dynamically change the width and height of their screen by flipping their tablet on its side! So, user agent sniffing is definitely not the way to go. Thankfully, there are much better alternatives. Use [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) to detect if the user's device has a touchscreen. Then, default back to checking the user agent screen only `if (!("maxTouchPoints" in navigator)) { /* Code here */ }`. Verwenden Sie diese Informationen darüber, ob das Gerät einen Touchscreen hat, um das gesamte Layout der Website nicht einfach für Touchscreen-Geräte zu ändern: Sie schaffen sich nur mehr Arbeit und Wartung. Fügen Sie stattdessen Touchscreen-Annehmlichkeiten hinzu, wie größere, leichter anklickbare Schaltflächen (das können Sie mit CSS tun, indem Sie die Schriftgröße erhöhen). Hier ist ein Beispiel für Code, der den Abstand für `#exampleButton` auf mobilen Geräten auf `1em` erhöht.

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

Was die Bildschirmgröße betrifft, verwenden Sie `window.innerWidth` und `window.addEventListener("resize", () => { /* Refresh screen size dependent things */ })`. Was Sie für die Bildschirmgröße tun möchten, ist nicht, Informationen auf kleineren Bildschirmen abzuschneiden. Das wird nur Menschen ärgern, da es sie dazu zwingt, die Desktop-Version zu verwenden. Versuchen Sie stattdessen, weniger Spalten von Informationen auf einer längeren Seite auf kleineren Bildschirmen zu haben, während Sie mehr Spalten auf einer kürzeren Seite auf größeren Bildschirmen haben. Dieser Effekt kann mit CSS [Flexboxen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) leicht erreicht werden, manchmal mit [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats) als teilweiser Rückfall.

Versuchen Sie auch, weniger relevante/wichtige Informationen weiter nach unten zu verschieben und den Inhalt der Seite sinnvoll zusammenzufassen. Obwohl es hier nicht zum Thema gehört, könnte Ihnen das folgende detaillierte Beispiel Einblicke und Ideen geben, die Sie davon überzeugen, auf User-Agent-Sniffing zu verzichten. Stellen wir uns eine Seite vor, die aus Informationsboxen besteht; jede Box handelt von einer anderen Katzen- oder Hunderasse. Jede Box hat ein Bild, eine Übersicht und eine historische Anekdote. Die Bilder sind selbst auf großen Bildschirmen auf eine maximal vernünftige Größe begrenzt. Zum Zwecke der sinnvollen Gruppierung des Inhalts sind alle Katzenboxen von allen Hundeboxen getrennt, sodass die Katzen- und Hundeboxen nicht miteinander vermischt sind. Auf einem großen Bildschirm spart es Platz, mehrere Spalten zu haben, um den links und rechts neben den Bildern verschwendeten Platz zu reduzieren. Die Boxen können auf zwei gleichberechtigte Methoden in mehrere Spalten unterteilt werden. Von diesem Punkt an gehen wir davon aus, dass alle Hundeboxen oben im Quellcode sind, alle Katzenboxen am Ende des Quellcodes und dass alle diese Boxen dasselbe übergeordnete Element haben. Es gibt natürlich eine einzige Instanz einer Hundebox unmittelbar über einer Katzenbox. Die erste Methode verwendet horizontale [Flexboxen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) zur Gruppierung des Inhalts, sodass wenn die Seite dem Endbenutzer angezeigt wird, alle Hundeboxen oben auf der Seite sind und alle Katzenboxen weiter unten auf der Seite. Die zweite Methode verwendet ein [Column](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) Layout und stellt alle Hunde nach links und alle Katzen nach rechts. Nur in diesem speziellen Szenario ist es angebracht, keinen Rückfall für das Flexbox/Mehrspalten-Layouts bereitzustellen, was zu einer einzelnen Spalte sehr breiter Boxen in alten Browsern führt. Erwägen Sie Folgendes: Wenn mehr Menschen die Webseite besuchen, um die Katzen zu sehen, dann wäre es vielleicht eine gute Idee, alle Katzen weiter oben im Quellcode als die Hunde zu platzieren, damit mehr Menschen auf kleineren Bildschirmen, wo sich der Inhalt auf eine Spalte reduziert, schneller finden können, wonach sie suchen.

Machen Sie schließlich Ihren Code immer dynamisch.
Der Benutzer kann sein mobiles Gerät zur Seite kippen und die Breite und Höhe der Seite ändern.
Oder es könnte in der Zukunft ein seltsames Klapptelefon-ähnliches Gerät geben, bei dem das Aufklappen den Bildschirm vergrößert.
Seien Sie nicht der Entwickler, der Kopfschmerzen hat, wie er mit dem Klapptelefon-ähnlichen Gerät umgehen soll.
Seien Sie nie mit Ihrer Webseite zufrieden, bis Sie das Entwicklertools-Seitenfenster öffnen und den Bildschirm verkleinern oder vergrößern können, während die Webseite glatt, flüssig und dynamisch angepasst aussieht.
Der einfachste Weg, dies zu tun, besteht darin, den gesamten Code, der den Inhalt je nach Bildschirmgröße bewegt, in eine einzige Funktion zu trennen, die beim Laden der Seite und bei jedem [Resize](/de/docs/Web/API/Window/resize_event) Ereignis danach aufgerufen wird. Wenn bei dieser Layoutfunktion viel berechnet wird, bevor sie das neue Layout der Seite bestimmt, dann ziehen Sie in Betracht, den Event-Listener zu {{Glossary("debounce", "debouncen")}}, sodass er nicht so oft aufgerufen wird.
Beachten Sie auch, dass es einen großen Unterschied zwischen den Medienanfragen `(max-width: 25em)`, `not all and (min-width: 25em)`, und `(max-width: 24.99em)` gibt: `(max-width: 25em)` schließt `(max-width: 25em)` aus, während `not all and (min-width: 25em)` `(max-width: 25em)` einschließt.
`(max-width: 24.99em)` ist eine schlechte Version von `not all and (min-width: 25em)`: Verwenden Sie nicht `(max-width: 24.99em)`, weil das Layout auf sehr großen Schriftgrößen auf sehr hochauflösenden Geräten in der Zukunft brechen _könnte_.
Seien Sie immer sehr bewusst in der Auswahl der richtigen Medienanfrage und in der Wahl des richtigen `>=`, `<=`, `>`, oder `<` in jedem entsprechenden JavaScript, da es sehr einfach ist, diese zu verwechseln, was dazu führt, dass die Webseite genau dort, wo das Layout wechselt, falsch aussieht.
Daher testen Sie die Webseite gründlich in den genauen Breiten/Höhen, in denen sich das Layout ändert, um sicherzustellen, dass sich das Layout korrekt ändert.

## Das Beste aus User-Agent-Sniffing machen

Nachdem Sie alle oben genannten besseren Alternativen zum User-Agent-Sniffing überprüft haben, gibt es dennoch einige potenzielle Fälle, in denen User-Agent-Sniffing angebracht und gerechtfertigt ist.

Ein solcher Fall ist die Verwendung von User-Agent-Sniffing als Fallback, um zu erkennen, ob das Gerät einen Touchscreen hat. Weitere Informationen finden Sie im Abschnitt [Mobilgerät-Erkennung](#mobile_device_detection).

Ein weiterer Fall besteht darin, Bugs in Browsern zu beheben, die sich nicht automatisch aktualisieren. WebKit (auf iOS) ist ein perfektes Beispiel. Apple zwingt alle Browser auf iOS, intern WebKit zu verwenden, sodass der Nutzer keine Möglichkeit hat, auf älteren Geräten einen besseren, aktuelleren Browser zu bekommen. Die meisten Bugs können erkannt werden, aber einige Bugs erfordern mehr Aufwand zum Erkennen als andere. In solchen Fällen kann es vorteilhaft sein, User-Agent-Sniffing zu verwenden, um die Leistung zu sparen. Zum Beispiel hat WebKit 6 einen Fehler, bei dem, wenn sich die Geräteausrichtung ändert, der Browser möglicherweise nicht [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Listener auslöst, wenn er sollte. Um diesen Fehler zu überwinden, beachten Sie den folgenden Code.

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

## Welcher Teil des User-Agents enthält die Informationen, die Sie suchen?

Da es keine Einheitlichkeit der verschiedenen Teile des User-Agent-Strings gibt, ist dies der knifflige Teil.

### Browser-Name und Version

Wenn Leute sagen, sie möchten "Browsenerkennung", meinen sie oft tatsächlich "Rendering-Engine-Erkennung". Möchten Sie wirklich Firefox erkennen, im Gegensatz zu SeaMonkey oder Chrome im Gegensatz zu Chromium? Oder möchten Sie wirklich sehen, ob der Browser die Gecko- oder die WebKit-Rendering-Engine verwendet? Wenn dies das ist, was Sie benötigen, siehe weiter unten auf der Seite.

Die meisten Browser geben den Namen und die Version im Format _BrowserName/VersionNumber_ an. Aber da der Name nicht die einzige Information im User-Agent-String ist, die in diesem Format vorliegt, können Sie den Namen des Browsers nicht erkennen, sondern nur prüfen, ob der gesuchte Name existiert. Aber beachten Sie, dass einige Browser lügen: Chrome beispielsweise meldet sich sowohl als Chrome als auch als Safari. Um Safari zu erkennen, müssen Sie auf den Safari-String prüfen und das Fehlen des Chrome-Strings überprüfen; Chromium gibt sich oft auch als Chrome aus, oder Seamonkey gibt sich manchmal als Firefox aus.

Seien Sie auch vorsichtig bei der Verwendung von regulären Ausdrücken mit dem Browsernamen, da User-Agents auch Zeichenfolgen außerhalb der Keyword/Wert-Syntax enthalten. Safari & Chrome enthalten beispielsweise die Zeichenfolge 'like Gecko'.

| Browser-Name                       | Muss enthalten  | Darf nicht enthalten             |
| ---------------------------------- | --------------- | -------------------------------- |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                  |
| Seamonkey                          | `Seamonkey/xyz` |                                  |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` oder `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                  |
| Safari                             | `Safari/xyz`    | `Chrome/xyz` oder `Chromium/xyz` |
| Opera 15+ (Blink-basierte Engine)  | `OPR/xyz`       |                                  |
| Opera 12- (Presto-basierte Engine) | `Opera/xyz`     |                                  |

\[1] Safari gibt zwei Versionsnummern an: eine technische im `Safari/xyz` Token und eine benutzerfreundliche im `Version/xyz` Token.

Natürlich gibt es absolut keine Garantie, dass ein anderer Browser nicht einige dieser Dinge übernimmt (wie Chrome die Safari-Zeichenfolge in der Vergangenheit übernommen hat). Deshalb ist die Browsenerkennung mittels des User-Agent-Strings unzuverlässig und sollte nur mit der Überprüfung der Versionsnummer erfolgen (das Übernehmen früherer Versionen ist weniger wahrscheinlich).

### Rendering-Engine

Wie bereits erwähnt, ist in den meisten Fällen das Suchen nach der Rendering-Engine der bessere Weg. Dies trägt dazu bei, weniger bekannte Browser nicht auszuschließen. Browser, die eine gemeinsame Rendering-Engine teilen, zeigen eine Seite auf die gleiche Weise an: Es ist oft eine faire Annahme, dass, was in einem funktioniert, auch im anderen funktioniert.

Es gibt drei aktive Haupt-Rendering-Engines: Blink, Gecko und WebKit. Da das Erkennen der Rendering-Engines gängig ist, haben viele User-Agents andere Rendering-Namen hinzugefügt, um die Erkennung auszulösen. Daher ist es wichtig, darauf zu achten, keine Fehlalarme zu verursachen, wenn die Rendering-Engine erkannt wird.

| Engine   | Muss enthalten    | Kommentar                                                                                                                                                                                             |
| -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                                       |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                                       |
| WebKit   | `AppleWebKit/xyz` | Aufpassen, WebKit-Browser fügen eine 'like Gecko'-Zeichenfolge hinzu, die bei der Erkennung dies als Gecko falsch positive auslösen könnte.                                                           |
| Presto   | `Opera/xyz`       | Veraltet; Presto wird nicht mehr in Opera-Browsern ab Version 15 (siehe 'Blink') verwendet.                                                                                                           |
| EdgeHTML | `Edge/xyz`        | Die nicht-Chromium-Edge zeigt die Engine-Version nach dem _Edge/_ Token an, nicht die Anwendungs-Version. Obsolet; EdgeHTML wird nicht mehr in Edge-Browsern ab Version 79 (siehe 'Blink') verwendet. |

## Rendering-Engine-Version

Die meisten Rendering-Engines geben die Versionsnummer im _RenderingEngine/VersionNumber_-Token an, mit der Ausnahme von Gecko. Gecko platziert die Gecko-Versionsnummer im Kommentarbereich des User-Agent nach dem `rv:`-String. Ab Gecko 14 für die mobile Version und Gecko 17 für die Desktop-Version wird dieser Wert auch im `Gecko/version`-Token angegeben (vorherige Versionen platzierten dort das Build-Datum, dann ein festes Datum namens GeckoTrail).

## Betriebssystem

Das Betriebssystem wird in den meisten User-Agent-Strings angegeben (obwohl nicht auf web-fokussierten Plattformen wie Firefox OS), aber das Format variiert stark. Es ist eine feste Zeichenfolge zwischen zwei Semikolons im Kommentarbereich des User-Agent. Diese Zeichenfolgen sind spezifisch für jeden Browser. Sie geben das Betriebssystem an, aber oft auch seine Version und Informationen zur zugrunde liegenden Hardware (32 oder 64 Bit, Intel/PPC für Mac oder x86/ARM-CPU-Architektur für Windows-PCs).

Wie in allen Fällen können sich diese Zeichenfolgen in der Zukunft ändern, daher sollten sie nur in Verbindung mit der Erkennung bereits veröffentlichter Browser verwendet werden. Eine technologische Überwachung muss vorhanden sein, um das Script anzupassen, wenn neue Browserversionen erscheinen.

### Mobil, Tablet oder Desktop

Der häufigste Grund für das Durchführen von User-Agent-Sniffing ist die Erkennung, welchen Gerätetyp der Browser ausführt. Das Ziel ist es, verschiedenen HTML-Code für verschiedene Gerätetypen bereitzustellen.

- Gehen Sie niemals davon aus, dass ein Browser oder eine Rendering-Engine nur auf einem Gerätetyp ausgeführt wird. Machen Sie insbesondere keine unterschiedlichen Voreinstellungen für verschiedene Browser oder Rendering-Engines.
- Verwenden Sie niemals das Betriebssystem-Token, um zu definieren, ob ein Browser auf einem Mobilgerät, Tablet oder Desktop ausgeführt wird. Das OS kann auf mehr als einem Gerätetyp laufen (zum Beispiel läuft Android sowohl auf Tablets als auch auf Telefonen).

Die folgende Tabelle fasst zusammen, wie gängige Browseranbieter angeben, dass ihre Browser auf einem Mobilgerät ausgeführt werden:

| Browser                                                              | Regel                                                     | Beispiel                                                                                                                                                         |
| -------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` oder `Tablet` innerhalb des Kommentars.          | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-basiert (Android, Safari)                                     | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-basiert (Chromium, Google Chrome, Opera 15+, Edge auf Android) | `Mobile Safari`-Token außerhalb des Kommentars.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-basiert (Opera 12-)                                           | `Opera Mobi/xyz`-Token innerhalb des Kommentars.          | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge auf Windows 10 Mobile                                           | `Mobile/xyz` und `Edge/` Tokens außerhalb des Kommentars. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

Zusammenfassend empfehlen wir, nach der Zeichenfolge `Mobi` überall im User-Agent zu suchen, um ein Mobilgerät zu erkennen.

> [!NOTE]
> Wenn das Gerät groß genug ist, dass es nicht mit `Mobi` markiert ist, sollten Sie Ihre Desktop-Seite bereitstellen (die als Best Practice trotzdem Touch-Eingaben unterstützen sollte, da immer mehr Desktops mit Touchscreens ausgestattet sind).

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementierung der Funktions-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
