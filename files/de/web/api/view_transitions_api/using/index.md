---
title: Verwendung der View Transitions API
slug: Web/API/View_Transitions_API/Using
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("View Transitions API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transitions API](/de/docs/Web/API/View_Transitions_API), wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst, sowie wie man aktive Ansichtsübergänge manipuliert. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für das Navigieren zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Prozess des Ansichtsübergangs

Schauen wir uns den Prozess an, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt vom Typ des Ansichtsübergangs ab:
   - Im Falle von Übergängen im selben Dokument (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung der Ansichtsänderung auslöst, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Falle von Übergängen zwischen Dokumenten (MPAs) wird ein Ansichtsübergang durch Starten der Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen auf demselben Ursprung sein und sich durch Einfügen einer {{cssxref("@view-transition")}} Regel in ihr CSS mit einem `navigation` Descriptor von `auto` für den Ansichtsübergang entscheiden.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel, zurückgegeben von `startViewTransition()` im Fall von Übergängen im selben Dokument (SPA)). Das `ViewTransition`-Objekt enthält mehrere Promises, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Ansichtsübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuern von Ansichtsübergängen mit JavaScript](#steuern_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API Schnappschüsse von Elementen, die eine {{cssxref("view-transition-name")}} auf sich deklariert haben.
3. Die Ansichtsänderung erfolgt:

   - Im Falle von Übergängen im selben Dokument (SPAs) wird der Callback, der an `startViewTransition()` übergeben wurde, aufgerufen, was das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das `ViewTransition.updateCallbackDone`-Promise erfüllt, sodass Sie auf die DOM-Aktualisierung reagieren können.

   - Im Falle von Übergängen zwischen Dokumenten (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst Schnappschüsse der neuen Ansicht als Live-Repräsentation.

   Zu diesem Zeitpunkt ist der Ansichtsübergang fast bereit zur Ausführung, und das `ViewTransition.ready`-Promise wird erfüllt, sodass Sie darauf reagieren können, indem Sie beispielsweise eine benutzerdefinierte JavaScript-Animation anstelle der standardmäßigen ausführen.

5. Die alten Seiten-Schnappschüsse animieren "heraus", während die neuen Ansichts-Schnappschüsse "herein" animieren. Standardmäßig animieren die alten Ansichts-Schnappschüsse von {{cssxref("opacity")}} 1 bis 0, und die neuen Ansichts-Schnappschüsse animieren von `opacity` 0 bis 1, was ein Überblenden erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das `ViewTransition.finished`-Promise erfüllt, sodass Sie darauf reagieren können.

> [!NOTE]
> Wenn der [Sichtbarkeitsstatus der Seite](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument von einem Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Aufrufs, wird der Ansichtsübergang vollständig übersprungen.

### Der Pseudo-Element-Baum des Ansichtsübergangs

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudo-Element-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}} Unterbaum wird für jeden erfassten `view-transition-name` erstellt.

Im Falle von Übergängen im selben Dokument (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Im Falle von Übergängen zwischen Dokumenten (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist der Stamm des Ansichtsüberlagerungsübergangs, der alle Ansichtsübergangs-Schnappschussgruppen enthält und über dem gesamten anderen Seiteninhalt liegt.
- Eine {{cssxref("::view-transition-group")}} dient als Container für jede Ansichtsübergangs-Schnappschussgruppe. Das `root`-Argument spezifiziert die Standard-Schnappschussgruppe — die Übergangsanimation der Ansicht wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}}-Element, da die Standard-Browser-Stile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das oben Genannte aufheben und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old")}} zielt auf den statischen Schnappschuss des alten Seitenelements, und {{cssxref("::view-transition-new")}} zielt auf den Live-Schnappschuss des neuen Seitenelements. Beide werden als ersetzte Inhalte gerendert, auf die gleiche Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit praktischen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen anzusprechen, indem Sie auf jedes ein anderes {{cssxref("view-transition-name")}} setzen. In solchen Fällen wird für jedes ein `::view-transition-group` erstellt. Siehe [Unterschiedliche Animationen für unterschiedliche Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie zum Anpassen der aus- und eingehenden Animationen die {{cssxref("::view-transition-old")}} und {{cssxref("::view-transition-new")}} Pseudo-Elemente mit Ihren Animationen anvisieren.

## Erstellen eines grundlegenden Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie man einen grundlegenden Ansichtsübergang sowohl im SPA- als auch im MPA-Fall erstellt.

### Einfacher SPA-Ansichtsübergang

Ein Beispiel: Eine SPA kann Funktionalität enthalten, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis irgendeiner Art zu aktualisieren, z. B. wenn auf einen Navigationslink geklickt wird oder ein Update vom Server gesendet wird. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies auf eine `displayNewImage()` Funktion vereinfacht, die basierend auf dem angeklickten Thumbnail ein neues Bild in voller Größe anzeigt. Wir haben dies in eine `updateView()` Funktion gekapselt, die die View Transitions API nur aufruft, wenn der Browser sie unterstützt:

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu bewältigen. Unterstützende Browser zeigen den Übergang von alten zu neuen Bildern und Bildunterschriften als ein weiches Überblenden (den Standard-Ansichtsübergang) an. In nicht unterstützenden Browsern funktioniert es weiterhin, jedoch ohne die schöne Animation.

### Einfacher MPA-Ansichtsübergang

Bei der Erstellung eines Übergangs zwischen Dokumenten (MPA) ist der Prozess noch einfacher als bei SPAs. Es ist kein JavaScript erforderlich, da die Ansichtsaktualisierung durch eine Dokumentnavigation im selben Ursprung und nicht durch eine durch JavaScript initiierte DOM-Änderung ausgelöst wird. Um einen grundlegenden MPA-Ansichtsübergang zu ermöglichen, müssen Sie eine {{cssxref("@view-transition")}} Regel im CSS sowohl für das aktuelle als auch das Zieldokument angeben, um sie zu aktivieren, so:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie man [die aus- und eingehenden Animationen](#anpassung_ihrer_animationen) des Ansichtsübergangs anpassen kann.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen Dokumenten im selben Ursprung erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassung Ihrer Animationen

Die View Transitions Pseudo-Elemente haben standardmäßige [CSS Animationen](/de/docs/Web/CSS/CSS_animations) (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transitions_API#pseudo-elements) detailliert beschrieben sind).

Die meisten Anzeigeübergänge haben standardmäßig eine glatte Überblendanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge haben eine sanfte Skalierungsanimation.
- `position`- und `transform`-Übergänge haben eine sanfte Bewegungsanimation.

Sie können die Standardanimationen auf jede gewünschte Weise mit normalem CSS ändern — zielen Sie die "von"-Animation mit {{cssxref("::view-transition-old")}}, und die "zu"-Animation mit {{cssxref("::view-transition-new")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie `::view-transition-group()` mit solchen Stilen anvisieren, in Fällen, wo Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Wegen der Pseudo-Element-Hierarchie und der Standard-Benutzeragenten-Styling werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu schützen — `::view-transition-group()` animiert auch und Sie könnten am Ende unterschiedliche Dauern für die `group`/`image-pair` Pseudo-Elemente im Vergleich zu den `old`- und `new`-Pseudo-Elementen haben.

Bei Übergängen zwischen Dokumenten (MPA) müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beiden Dokumenten enthalten.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, geht jedoch in der Anpassung einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und diese auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente anwendet. Das Ergebnis ist, dass der Standard-Überblendübergang ausgetauscht wird gegen einen "nach oben wischen"-Übergang, wenn die Navigation erfolgt:

```css
/* Create a custom animation */

@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Apply the custom animation to the old and new page states */

::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

## Verschiedene Animationen für verschiedene Elemente

Standardmäßig werden alle verschiedenen Elemente, die sich während der Ansichtsaktualisierung ändern, mit der gleichen Animation überblendet. Wenn Sie möchten, dass einige Elemente anders animiert werden als die Standard `root`-Animation, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel erhalten in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}} Elemente einen `view-transition-name` von `figure-caption`, um sie in Bezug auf Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet wird der generierte Pseudo-Element-Baum nun so aussehen:

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

Das Vorhandensein des zweiten Satzes von Pseudo-Elementen ermöglicht es, dass separate Ansichtsübergangsstile nur auf das `<figcaption>` angewendet werden. Die unterschiedlichen alten und neuen Snapshots werden separat voneinander behandelt.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, was Sie möchten, außer `none` — der Wert `none` bedeutet ausdrücklich, dass das Element nicht an einem Ansichtsübergang teilnimmt.
>
> `view-transition-name` Werte müssen auch einzigartig sein. Wenn zwei gerenderte Elemente zum gleichen Zeitpunkt den gleichen `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang übersprungen.

Der folgende Code wendet eine benutzerdefinierte Animation nur auf das `<figcaption>` an:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch weitere Styles zu beiden hinzugefügt, um sie an derselben Stelle zu halten und das standardmäßige Styling daran zu hindern, unsere benutzerdefinierten Animationen zu beeinträchtigen.

> [!NOTE]
> Sie können `*` als Identifikator in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente anzusprechen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzung der standardmäßigen Animationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption gefunden haben, die einfacher war und ein schöneres Ergebnis als die obige produzierte. Unser endgültiger `<figcaption>` Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer glatten Skalierung überblendet. Wir mussten nur eine feste `height` auf beiden Zuständen festlegen, um es zum Laufen zu bringen.

> **Hinweis:** [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere weitere Anpassungsbeispiele.

## Steuern von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des erreichten Übergangs auszuführen. Zum Beispiel wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudo-Element-Baum erstellt ist und die Animation zu starten beginnt, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation abgeschlossen ist und die neue Seitenansicht sichtbar und interaktiv für den Benutzer ist.

Das `ViewTransition` kann so aufgerufen werden:

1. Im Fall von Übergängen im selben Dokument (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) die `ViewTransition` zurück, die dem Übergang zugeordnet ist.
2. Im Fall von Übergängen zwischen Dokumenten (MPA):

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Das Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft sowie eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Typ der Navigation und die aktuellen und Zieldokument-Historieneinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine URL einer anderen Herkunft irgendwo in der Umleitungskette enthält, gibt die `activation`-Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder bei der Aktivierung eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}). Das Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Schauen wir uns ein paar Beispielcodes an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang im selben Dokument (SPA)

Der folgende JavaScript-Code könnte verwendet werden, um einen kreisförmigen Enthüllungs-Ansichtsübergang zu erstellen, der von der Position des Benutzer-Cursors beim Klicken ausgeht, mit Animationen, die durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt werden.

```js
// Store the last click event
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Create a transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root's new view
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation zu deaktivieren und zu verhindern, dass die alten und neuen Ansichtsstände auf irgendeine Weise überblendet werden (der neue Zustand "wischt" direkt über dem alten Zustand, anstatt in ihn zu überblenden):

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang zwischen Dokumenten (MPA)

Das [List of Chrome DevRel team members](https://view-transitions.netlify.app/profiles/mpa/) Demo bietet eine grundlegende Sammlung von Teamprofilen und demonstriert, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse nutzt, um die ausgehenden und eingehenden Animationen eines Ansichtsübergangs zwischen Dokumenten basierend auf den "von"- und "zu"-URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis-Listener sieht folgendermaßen aus. Dies setzt Ansichtsübergangsnamen auf den Elementen auf der ausgehenden Seite, die mit den Profilseiten verlinken. Beim Navigieren von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen _nur_ für das jeweils angeklickte verlinkte Element bereitgestellt.

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Wir entfernen die `view-transition-name` Werte, nachdem in jedem Fall Snapshots aufgenommen wurden. Wenn wir sie gesetzt ließen, würden sie im Seitenzustand bestehen bleiben, der beim Navigieren im {{Glossary("bfcache", "bfcache")}} gespeichert ist. Wenn dann die Zurück-Taste gedrückt wurde, würde der `pagereveal` Ereignishandler des Zurück navigierten Dokuments versuchen, dieselben `view-transition-name` Werte auf unterschiedlichen Elementen zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener sieht folgendermaßen aus. Dieser funktioniert in ähnlicher Weise wie der `pageswap` Ereignis-Listener, obwohl zu beachten ist, dass hier die "zu"-Animation für die Seitenelemente auf der neuen Seite angepasst wird.

```js
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## Stabilisierung des Seitenstatus zur Konsistenz der Übergänge zwischen Dokumenten

Bevor Sie einen Übergang zwischen Dokumenten durchführen, möchten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist, indem Sie auf {{Glossary("Render_blocking", "Renderblockierung")}} setzen, um sicherzustellen, dass:

1. Kritische Styles geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Der HTML-Bereich, der für die erste Ansicht des Benutzers der Seite sichtbar ist, analysiert wurde, sodass er konsistent rendert.

Styles sind standardmäßig renderblockiert, und Skripte können mit dem [`blocking="render"`](/de/docs/Web/HTML/Element/script#blocking) Attribut renderblockiert werden.

Um sicherzustellen, dass Ihr initiales HTML analysiert wurde und immer konsistent gerendert wird, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect) verwenden. In diesem Element fügen Sie die folgenden Attribute ein:

- `rel="expect"` um anzugeben, dass Sie dieses `<link>` Element verwenden möchten, um ein HTML auf der Seite zu renderblockieren.
- `href="#element-id"` um die ID des Elements anzugeben, das Sie renderblockieren möchten.
- `blocking="render"` um das spezifizierte HTML zu renderblockieren.

Lassen Sie uns erkunden, wie das mit einem einfachen Beispiel-HTML-Dokument aussieht:

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async href="layout.js" blocking="render"></script>

    <!-- Use rel="expect" and blocking="render" to ensure the
         #lead-content element is visible and fully parsed before
         activating the transition -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>Page title</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">The first section</section>
      <section>The second section</section>
    </div>
  </body>
</html>
```

Das Ergebnis ist, dass das Dokument-Rendering blockiert wird, bis der Leitinhalt `<div>` analysiert wurde, wodurch ein konsistenter Ansichtsübergang gewährleistet wird.

Sie können auch ein [`media`](/de/docs/Web/HTML/Element/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel möchten Sie möglicherweise das Rendering für einen geringeren Inhalt blockieren, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm laden, als auf einem Gerät mit großem Bildschirm. Dies macht Sinn — auf einem Mobilgerät wird weniger Inhalt sichtbar sein, wenn die Seite erstmals geladen wird, als im Fall eines Desktops.

Dies könnte mit dem folgenden HTML erreicht werden:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (min-width: 641px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (max-width: 640px)" />
```
