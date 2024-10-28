---
title: Verwendung der View Transitions API
slug: Web/API/View_Transitions_API/Using
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{DefaultAPISidebar("View Transitions API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transitions API](/de/docs/Web/API/View_Transitions_API), wie Sie Ansichtsübergänge erstellen und die Übergangsanimationen anpassen können und wie Sie aktive Ansichtsübergänge manipulieren. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der View-Transition-Prozess

Lassen Sie uns den Prozess durchgehen, nach dem ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt von der Art des Ansichtsübergangs ab:
   - Im Fall von Übergängen im selben Dokument (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung für den Ansichtswechsel auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Fall von Übergängen zwischen Dokumenten (MPAs) wird ein Ansichtsübergang ausgelöst, indem die Navigation zu einem neuen Dokument initiiert wird. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen sich auf demselben Ursprung befinden und sich durch das Einschließen einer {{cssxref("@view-transition")}} Regel in ihrer CSS mit einem `navigation` Deskriptor auf `auto` für den Ansichtsübergang entscheiden.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel, zurückgegeben von `startViewTransition()` im Fall von Übergängen im selben Dokument (SPA)). Das `ViewTransition`-Objekt enthält mehrere Promises, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Ansichtsübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuerung von Ansichtsübergängen mit JavaScript](#steuerung_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API Schnappschüsse von Elementen, die eine deklarierte {{cssxref("view-transition-name")}} aufweisen.
3. Der Ansichtswechsel tritt auf:

   - Im Fall von Übergängen im selben Dokument (SPAs) wird der an `startViewTransition()` übergebene Callback aufgerufen, was eine Änderung des DOM verursacht.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) Promise erfüllt, was Ihnen ermöglicht, auf die DOM-Aktualisierung zu reagieren.

   - Im Fall von Übergängen zwischen Dokumenten (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst Schnappschüsse aus der neuen Ansicht als Live-Darstellung.

   An diesem Punkt steht der Ansichtsübergang kurz vor der Ausführung, und das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) Promise wird erfüllt, was Ihnen ermöglicht, beispielsweise eine benutzerdefinierte JavaScript-Animation anstelle der Standardanimation auszuführen.

5. Die alten Seiten-Schnappschüsse animieren sich "heraus", während die neuen Ansichts-Schnappschüsse "herein" animieren. Standardmäßig animieren die alten Ansichts-Schnappschüsse von {{cssxref("opacity")}} 1 auf 0, und die neuen Ansichts-Schnappschüsse animieren von `opacity` 0 auf 1, was einen Überblendungseffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) Promise erfüllt, was Ihnen ermöglicht zu reagieren.

> [!NOTE]
> Wenn der [Sichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt ist, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Der View-Transition-Pseudoelementbaum

Um die Erstellung der ausgehenden und eingehenden Übergangsanimationen zu steuern, erstellt die API einen Pseudoelementbaum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}} Teilbaum wird für jedes erfasste `view-transition-name` erstellt.

Im Fall von Übergängen im selben Dokument (SPAs) wird der Pseudoelementbaum im Dokument verfügbar gemacht. Im Fall von Übergängen zwischen Dokumenten (MPAs) wird der Pseudoelementbaum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Ansichtsübergangs-Overlays, das alle Ansichtsübergangs-Schnappschussgruppen enthält und über allen anderen Seiteninhalten liegt.
- Eine {{cssxref("::view-transition-group")}} fungiert als Container für jede Ansichtsübergangsschnappschussgruppe. Das Argument `root` gibt die Standardschnappschussgruppe an — die Ansichtsübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}} Element, da die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenersteller dies ändern können, indem sie das oben genannte zurücksetzen und `view-transition-name: root` auf einem anderen Element festlegen.

- {{cssxref("::view-transition-old")}} zielt auf den statischen Schnappschuss des alten Seitenelements und {{cssxref("::view-transition-new")}} zielt auf den Live-Schnappschuss des neuen Seitenelements. Beide werden als ersetzte Inhalte gerendert, ähnlich wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit praktischen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen anzusprechen, indem jedem ein anderes {{cssxref("view-transition-name")}} zugewiesen wird. In solchen Fällen wird ein `::view-transition-group` für jedes erstellt. Siehe [Unterschiedliche Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie zur Anpassung der ausgehenden und eingehenden Animationen die {{cssxref("::view-transition-old")}} und {{cssxref("::view-transition-new")}} Pseudoelemente jeweils mit Ihren Animationen ansprechen.

## Erstellung eines grundlegenden Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie Sie einen grundlegenden Ansichtsübergang erstellen, sowohl im SPA- als auch im MPA-Fall.

### Grundlegender SPA-Ansichtsübergang

Ein SPA könnte beispielsweise Funktionalität enthalten, um neuen Content abzurufen und das DOM als Reaktion auf ein Ereignis zu aktualisieren, wie einen Klick auf einen Navigationslink oder eine Aktualisierung vom Server. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies auf eine `displayNewImage()`-Funktion vereinfacht, die ein neues Vollbild basierend auf dem angeklickten Thumbnail anzeigt. Wir haben dies in eine `updateView()`-Funktion gekapselt, die die View Transitions API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code genügt, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Beschriftungen als sanfte Überblendung (den Standardansichtsübergang). In nicht unterstützenden Browsern funktioniert es weiterhin, jedoch ohne die schöne Animation.

### Grundlegender MPA-Ansichtsübergang

Bei der Erstellung eines Übergangs zwischen Dokumenten (MPA) ist der Prozess sogar einfacher als bei SPAs. Kein JavaScript ist erforderlich, da das Update des Views durch eine Navigation zwischen Dokumenten statt einer durch JavaScript initiierten DOM-Änderung ausgelöst wird. Um einen grundlegenden MPA-Ansichtsübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}} Regel in das CSS beider aktueller und Ziel-Dokumente einfügen, um sie zu aktivieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion, und demonstriert zudem, wie man die [ausgehenden und eingehenden Animationen anpasst](#anpassen_ihrer_animationen) des Ansichtsübergangs.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen Dokumenten desselben Ursprungs erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die View Transitions-Pseudoelemente haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transitions_API#pseudo-elements) ausführlich beschrieben sind).

Die meisten Erscheinungsübergänge haben standardmäßig eine sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge haben eine sanfte Skalierungsanimation angewendet.
- `position` und `transform` Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen in beliebiger Weise ändern, indem Sie normales CSS verwenden — zielen Sie auf die "von" Animation mit {{cssxref("::view-transition-old")}}, und die "zu" Animation mit {{cssxref("::view-transition-new")}}.

Um beispielsweise die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie solche Stile in Fällen, in denen Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten, auf `::view-transition-group()` anwenden. Aufgrund der Pseudoelementhierarchie und standardmäßigen Benutzeragentenstilisierung werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu sichern — `::view-transition-group()` animiert ebenfalls und Sie könnten mit unterschiedlichen Dauern für die `group`/`image-pair` Pseudoelemente versus den `old` und `new` Pseudoelementen enden.

Im Fall von Übergängen zwischen Dokumenten (MPA) müssen die Pseudoelemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beiden Dokumenten einfügen.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben genannte CSS, geht aber mit der Anpassung einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und diese auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudoelemente anwendet. Das Ergebnis ist, dass der Standardüberblendeffekt durch einen "Swipe-Up" Übergang beim Navigieren ersetzt wird:

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

Standardmäßig werden alle verschiedenen Elemente, die sich während des Ansichtsupdates ändern, mit derselben Animation übergegangen. Wenn Sie möchten, dass einige Elemente anders animieren als die Standardanimation `root`, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben die {{htmlelement("figcaption")}} Elemente beispielsweise ein `view-transition-name` von `figure-caption`, um sie in Bezug auf die Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der generierte Pseudoelementbaum jetzt so aus:

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

Das Vorhandensein des zweiten Sets von Pseudoelementen ermöglicht es, einen separaten Ansichtsübergangsstil nur auf das `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Aufnahmendarstellungen werden separat voneinander gehandhabt.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, was Sie möchten, außer `none` — der Wert `none` bedeutet speziell, dass das Element nicht an einem Ansichtsübergang teilnehmen wird.
>
> `view-transition-name` Werte müssen ebenfalls eindeutig sein. Wenn zwei gerenderte Elemente zur selben Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang übersprungen.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudoelemente angewendet. Wir haben auch einige andere Stile zu beiden hinzugefügt, um sie an derselben Stelle zu halten und die Standardstilierung daran zu hindern, mit unseren benutzerdefinierten Animationen zu interferieren.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudoelement verwenden, um alle Snapshot-Pseudoelemente anzusprechen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzen der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher war und ein schöneres Ergebnis als das obige erzeugte. Unser endgültiger `<figcaption>` Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer sanften Skalierung übergeht. Wir mussten nur eine feste `height` auf beiden Zuständen festlegen, um es funktionieren zu lassen.

> **Hinweis:** [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuerung von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat ein zugeordnetes [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt, das mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des Übergangs auszuführen. Zum Beispiel wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudoelementbaum erstellt ist und die Animation kurz vor dem Start steht, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann wie folgt aufgerufen werden:

1. Im Fall von Übergängen im selben Dokument (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den mit dem Übergang verbundenen `ViewTransition` zurück.
2. Im Fall von Übergängen zwischen Dokumenten (MPA):

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) ermöglicht den Zugriff auf den `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft sowie auf ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) via [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), das den Navigationstyp und die aktuellen und Ziel-Dokument-Verlaufeinträge enthält.
     > [!NOTE]
     > Wenn die Navigation irgendwo in der Umleitungskette eine URL anderer Herkunft enthält, gibt die `activation` Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmalig gerendert wird, entweder durch Laden eines neuen Dokuments aus dem Netzwerk oder Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back-/Forward-Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) ermöglicht den Zugriff auf den `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Schauen wir uns etwas Beispielcode an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang im selben Dokument (SPA)

Der folgende JavaScript-Code könnte verwendet werden, um einen kreisförmigen Einblick in den Ansichtsübergang zu schaffen, der von der Position des Benutzerzeigers bei Klick ausgeht, mit Animation bereitgestellt durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation abzuschalten und das alte und neue Ansichtsstatus in keiner Weise zu überblenden (der neue Status "wischt" direkt über den alten Status, anstatt hereinzutransitionieren):

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

Das [Verzeichnis der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Sammlung von Teamprofile-Seiten und zeigt, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet, um die ausgehenden und eingehenden Animationen eines Übergangs zwischen Dokumenten basierend auf den "von" und "zu" URLs zu individualisieren.

Der Event-Listener für [`pageswap`](/de/docs/Web/API/Window/pageswap_event) sieht wie folgt aus. Dieser setzt Ansichtstransitionsnamen auf die Elemente auf der ausgehenden Seite, die zu den Profilseiten verlinken. Bei der Navigation von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen nur für das jeweils geklickte verlinkte Element bereitgestellt.

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
> Wir entfernen die `view-transition-name` Werte, nachdem die Schnappschüsse in jedem Fall aufgenommen wurden. Wenn wir sie eingestellt lassen würden, würden sie im im {{Glossary("bfcache", "bfcache")}} gespeicherten Seitenstatus nach der Navigation bestehen bleiben. Wenn dann die Zurücktaste gedrückt wird, würde der `pagereveal`-Ereignishandler der Seite, zu der zurück navigiert wird, dann versuchen, dieselben `view-transition-name` Werte auf verschiedenen Elementen zu setzen. Wenn mehrere Elemente denselben `view-transition-name` setzen, wird der Ansichtsübergang übersprungen.

Der Event-Listener für [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) sieht wie folgt aus. Dieser funktioniert ähnlich wie der `pageswap`-Event-Listener, obwohl hier bedacht werden muss, dass wir die "zu" Animation für Seiten-Elemente auf der neuen Seite anpassen.

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

## Stabilisierung des Seitenstatus zur Konsistenz von Übergängen zwischen Dokumenten

Bevor Sie einen Übergang zwischen Dokumenten durchführen, möchten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist, wobei Sie auf {{Glossary("Render_blocking", "Renderblockierung")}} angewiesen sind, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML, das für die erste Ansicht des Nutzers sichtbar ist, geparst wurde, sodass es konsistent gerendert wird.

Stile werden standardmäßig render-blockiert und Skripte können mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Element/script#blocking) render-blockiert werden.

Um sicherzustellen, dass Ihr initiales HTML geparst wurde und immer konsistent gerendert wird, bevor die Übergangsanimation läuft, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect) verwenden. In diesem Element fügen Sie die folgenden Attribute ein:

- `rel="expect"` um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um einige HTML-Inhalte auf der Seite render-blockierend zu machen.
- `href="#element-id"` um die ID des Elements anzugeben, das Sie render-blockieren möchten.
- `blocking="render"` um das spezifizierte HTML zu render-blockieren.

Schauen wir uns an, wie dies mit einem einfachen HTML-Dokument aussieht:

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

Das Ergebnis ist, dass das Rendern des Dokuments blockiert wird, bis der führende Inhalts-<div> geparst wurde, was einen konsistenten Ansichtsübergang sicherstellt.

Sie können auch ein [`media`](/de/docs/Web/HTML/Element/link#media) Attribut auf `<link rel="expect">`-Elementen angeben. Zum Beispiel könnten Sie bei kleineren Bildschirmen weniger Content blocken wollen als bei einem Weitbildschirmgerät. Dies ergibt Sinn — auf einem Mobilgerät wird weniger Content beim ersten Laden der Seite sichtbar als im Fall eines Desktops.

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
