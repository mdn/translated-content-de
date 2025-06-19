---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst, sowie wie man aktive Ansichtsübergänge manipuliert. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA), als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Ansichtsübergangsprozess

Lassen Sie uns den Prozess durchgehen, durch den ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt von der Art des Ansichtsübergangs ab:
   - Im Fall von Übergängen im gleichen Dokument (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die Änderung der Ansicht DOM-Aktualisierung auslösen würde, als Rückruf an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Fall von Übergängen zwischen Dokumenten (MPAs) wird ein Ansichtsübergang durch die Einleitung der Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Ziel-Dokument der Navigation müssen im gleichen Ursprung sein und müssen sich durch die Einbeziehung einer {{cssxref("@view-transition")}} at-Regel in ihrem CSS mit einem `navigation`-Deskriptor von `auto` für den Ansichtsübergang anmelden.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz (zum Beispiel von `startViewTransition()` im Fall von Übergängen im selben Dokument (SPA) zurückgegeben). Das `ViewTransition`-Objekt umfasst mehrere Promises, die es Ihnen ermöglichen, Code auszuführen, wenn verschiedene Teile des Ansichtsübergangsprozesses erreicht werden. Weitere Informationen finden Sie unter [Steuerung von Ansichtsübergängen mit JavaScript](#steuerung_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API statische Bild **Snapshots** von Elementen, die eine {{cssxref("view-transition-name")}} deklariert haben.
3. Der Ansichtswechsel erfolgt:

   - Im Fall von Übergängen im gleichen Dokument (SPAs) wird der Rückruf, der an `startViewTransition()` übergeben wurde, aufgerufen, was zu einer Änderung des DOM führt.

     Wenn der Rückruf erfolgreich ausgeführt wurde, wird das Promise [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, wodurch Sie auf das Aktualisieren des DOM reagieren können.

   - Im Fall von Übergängen zwischen Dokumenten (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst "Live"-Snapshots (bedeutet, interaktive DOM-Bereiche) von der neuen Ansicht.

   An diesem Punkt ist der Ansichtsübergang bereit, ausgeführt zu werden, und das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, wodurch Sie reagieren können, indem Sie beispielsweise eine benutzerdefinierte JavaScript-Animation statt der standardmäßigen ausführen.

5. Die Schnappschüsse der alten Seite animieren "heraus", während die Schnappschüsse der neuen Ansicht "hinein" animieren. Standardmäßig animieren die Schnappschüsse der alten Ansicht von {{cssxref("opacity")}} 1 zu 0, und die Schnappschüsse der neuen Ansicht von `opacity` 0 zu 1, was einen Überblendeeffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das Promise [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, wodurch Sie reagieren können.

> [!NOTE]
> Wenn der [Seitensichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument von einem Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Anrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Ein Hinweis zu Snapshots

Es ist erwähnenswert, dass wir, wenn wir über Ansichtsübergänge sprechen, den Begriff _Snapshot_ oft verwenden, um auf einen Teil der Seite zu verweisen, der einen `view-transition-name` deklariert hat. Diese Abschnitte werden separat von anderen Teilen der Seite mit unterschiedlichen `view-transition-name`-Werten animiert. Obwohl der Prozess, einen Snapshot über einen Ansichtsübergang zu animieren, tatsächlich zwei separate Snapshots umfasst - einen der alten und einen der neuen UI-Zustände - verwenden wir Snapshots, um die gesamte Seitenfläche zu vereinfachen.

Der Snapshot des alten UI-Zustands ist ein statisches Bild, sodass der Nutzer nicht mit ihm interagieren kann, während er "heraus" animiert.

Der Snapshot des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Nutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während er "hinein" animiert.

### Der Pseudo-Elementbaum des Ansichtsübergangs

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudo-Elementbaum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Fall von Übergängen im gleichen Dokument (SPAs) ist der Pseudo-Elementbaum im Dokument verfügbar. Im Fall von Übergängen zwischen Dokumenten (MPAs) ist der Pseudo-Elementbaum nur im Zieldokument verfügbar.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel der Ansichtsüberlagerung, die alle Ansichtsübergangsgruppen enthält und über dem gesamten anderen Seiteninhalt sitzt.
- Ein {{cssxref("::view-transition-group()")}} dient als Container für jeden Ansichtsübergangssnapshot. Das `root`-Argument gibt den Standardsnapshot an — die Ansichtsübergangsanimation wird auf den Snapshot angewendet, dessen `view-transition-name` `root` ist. Standardmäßig handelt es sich um einen Snapshot des {{cssxref(":root")}}-Elements, da die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das oben Genannte aufheben und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Snapshot des alten Seitenelements ab, und {{cssxref("::view-transition-new()")}} zielt auf den Live-Snapshot des neuen Seitenelements ab. Beide werden wie ersetzte Inhalte gerendert, in derselben Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen anzuvisieren, indem auf jedem ein anderer {{cssxref("view-transition-name")}} gesetzt wird. In solchen Fällen wird für jedes ein `::view-transition-group()` erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_unterschiedliche_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie zum Anpassen der ausgehenden und eingehenden Animationen die Pseudo-Elemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} mit Ihren Animationen gezielt ansprechen.

## Erstellen eines grundlegenden Ansichtsübergangs

Dieser Abschnitt zeigt, wie man einen grundlegenden Ansichtsübergang sowohl im SPA- als auch im MPA-Fall erstellt.

### Grundlegender SPA-Ansichtsübergang

Ein SPA kann Funktionalitäten beinhalten, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis irgendeiner Art zu aktualisieren, wie zum Beispiel ein Klick auf einen Navigationslink oder ein Server-Update.

Unser [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine grundlegende Bildgalerie. Wir haben eine Reihe von {{htmlelement("a")}}-Elementen, die Miniatur-{{htmlelement("img")}}-Elemente enthalten, die dynamisch mit JavaScript generiert werden. Wir haben auch ein {{htmlelement("figure")}}-Element, das ein {{htmlelement("figcaption")}} und ein `<img>` enthält, die die Bilder in voller Größe der Galerie anzeigen.

Wenn ein Thumbnail angeklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, wodurch das vollständige Bild und seine zugehörige Beschriftung im `<figure>` angezeigt werden. Wir haben dies in eine `updateView()`-Funktion eingekapselt, die die View Transition API nur dann aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigt Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Beschriftungen als sanfte Überblendung an (der Standard-Ansichtsübergang). In nicht unterstützenden Browsern funktioniert es weiterhin, jedoch ohne die schöne Animation.

### Grundlegender MPA-Ansichtsübergang

Wenn Sie einen Übergang zwischen Dokumenten (MPA) erstellen, ist der Prozess noch einfacher als bei SPAs. Es ist kein JavaScript erforderlich, da das Ansichts-Update durch eine gleichermaßen fokussierte Navigation auf Dokumentenbasis und nicht durch eine von JavaScript initiierte DOM-Änderung ausgelöst wird. Um einen grundlegenden MPA-Ansichtsübergang zu ermöglichen, müssen Sie für das aktuelle und das Ziel-Dokument eine {{cssxref("@view-transition")}} at-Regel im CSS angeben, um sie zu aktivieren, etwa so:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese at-Regel in Aktion und demonstriert zusätzlich, wie man die [ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des Ansichtsübergangs anpasst.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen Dokumenten mit demselben Ursprung erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die pseudo-Elemente der View Transitions haben standardmäßige [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert beschrieben sind).

Die meisten Erscheinungsübergänge erhalten eine standardmäßige glatte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge haben eine glatte Skalierungsanimation angewendet.
- `position` und `transform` Übergänge haben eine glatte Bewegungsanimation angewendet.

Sie können die Standardsanimationen nach Belieben mit regulärem CSS modifizieren - zielen Sie die "from"-Animation mit {{cssxref("::view-transition-old()")}} an und die "to"-Animation mit {{cssxref("::view-transition-new()")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen ansprechen, wenn Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der Standardbenutzeragenten-Stilvorlage werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option zum Absichern Ihres Codes - `::view-transition-group()` animiert ebenfalls und Sie könnten am Ende unterschiedliche Dauer für die `group`/`image-pair` Pseudo-Elemente im Vergleich zu den `old` und `new` Pseudo-Elementen haben.

Im Fall von Übergängen zwischen Dokumenten (MPA) müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie die View Transition in beide Richtungen verwenden möchten, müssen Sie sie in beiden enthalten.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, geht aber noch einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente anwendet. Das Ergebnis ist, dass der standardmäßige Überblende-Übergang durch einen "Swipe up"-Übergang ausgetauscht wird, wenn die Navigation erfolgt:

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

## Verschiedene Animationen für unterschiedliche Elemente

Standardmäßig werden alle unterschiedlichen Elemente, die während des Ansichts-Updates geändert werden, mit derselben Animation übergangen. Wenn Sie einige Elemente anders als die standardmäßige `root`-Animation animieren möchten, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} herausstellen. Zum Beispiel erhalten in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente einen `view-transition-name` von `figure-caption`, um sie hinsichtlich der Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der generierte Pseudo-Element-Baum jetzt so aus:

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

Das Bestehen der zweiten Gruppe von Pseudo-Elementen ermöglicht es, separate Ansichtsübergangsstile nur auf das `<figcaption>` anzuwenden. Die verschiedenen alten und neuen Ansichtsaufnahmen werden unabhängig voneinander behandelt.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie an derselben Stelle zu halten und zu verhindern, dass die Standardstile unsere benutzerdefinierten Animationen beeinträchtigen.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente anzuzielen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name` Werte

Die Eigenschaft `view-transition-name` kann einen eindeutigen {{cssxref("custom-ident")}}-Wert annehmen, der jeder Bezeichner sein kann, der nicht als Schlüsselwort fehlinterpretiert wird. Der Wert von `view-transition-name` für jedes gerenderte Element muss eindeutig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Es kann auch Schlüsselwortwerte annehmen:

- `none`: Verursacht, dass das Element nicht an einem separaten Snapshot teilnimmt, es sei denn, es hat ein übergeordnetes Element mit einem `view-transition-name`-Set, in diesem Fall wird es als Teil dieses Elements gesnapshottet.
- `match-element`: Setzt automatisch eindeutige `view-transition-name`-Werte auf alle ausgewählten Elemente.

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als das obige produzierte. Unser endgültiger `<figcaption>` Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer sanften Skalierung übergeht. Wir mussten lediglich eine feste Höhe in beiden Zuständen setzen, um es zum Laufen zu bringen.

> **Hinweis:** [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuerung von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat ein zugehöriges [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Übergangszustände auszuführen. Zum Beispiel erfüllt [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready), sobald der Pseudo-Elementbaum erstellt wurde und die Animation zu starten bereit ist, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation abgeschlossen ist und die neue Seitenansicht sichtbar und interaktiv für den Benutzer ist.

Der `ViewTransition` kann wie folgt zugegriffen werden:

1. Im Fall von Übergängen im gleichen Dokument (SPA) gibt die [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methode den `ViewTransition` zurück, der dem Übergang zugeordnet ist.
2. Im Fall von Übergängen zwischen Dokumenten (MPA):

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis wird ausgelöst, wenn ein Dokument kurz vor dem Unladen aufgrund einer Navigation steht. Das zugehörige Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf das `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition)-Eigenschaft, sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen sowie Ziel-Dokumenthistorieneinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine Ursprungsübergreifende URL irgendwo in der Weiterleitungskette hat, gibt die `activation`-Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder wenn ein frisches Dokument aus dem Netzwerk geladen wird oder ein Dokument aktiviert wird (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}). Das zugehörige Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition)-Eigenschaft.

Schauen wir uns einige Beispielcodes an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang im gleichen Dokument (SPA)

Das folgende JavaScript könnte verwendet werden, um einen kreisförmigen Enthüllungs-Ansichtsübergang zu erstellen, der von der Position des Cursors des Nutzers bei Klick aus geht, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichtsziele in irgendeiner Weise verschmelzen (der neue Status „wischt“ sich direkt über den alten Status anstatt in ihn hinein zu übergehen):

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

Die [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Reihe von Teamprofilseiten und demonstriert, wie die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisse verwendet werden, um die ausgehenden und eingehenden Animationen eines ansichtsübergreifenden Übergangs anhand der „von“ und „zu“ URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis-Listener sieht folgendermaßen aus. Dies setzt Ansichtsübergangsnamen auf den Elementen auf der ausgehenden Seite, die zu den Profilseiten verlinken. Wenn von der Startseite zu einer Profilseite navigiert wird, werden benutzerdefinierte Animationen nur für das jeweils angeklickte Link-Element bereitgestellt.

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
> Wir entfernen die `view-transition-name`-Werte in jedem Fall, nachdem Snapshots gemacht wurden. Wenn wir sie gesetzt ließen, würden sie im Seitenzustand gespeichert bleiben, der beim Navigieren im {{Glossary("bfcache", "bfcache")}} gespeichert wird. Wird dann die Zurück-Taste gedrückt, versucht der `pagereveal`-Ereignishandler der zurück navigierten Seite, dieselben `view-transition-name`-Werte auf unterschiedliche Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis-Listener sieht folgendermaßen aus. Er funktioniert ähnlich wie der `pageswap`-Ereignis-Listener, jedoch beachten Sie, dass hier die „to“-Animation für Seitenlemente auf der neuen Seite angepasst wird.

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

## Stabilisierung des Seitenzustandes, um konsistente Übergänge zwischen Dokumenten zu ermöglichen

Bevor ein Übergang zwischen Dokumenten ausgeführt wird, sollten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist, indem Sie auf {{Glossary("Render_blocking", "Render-Blocking")}} vertrauen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML für die anfängliche Ansicht des Nutzers der Seite analysiert wurde, damit es konsistent gerendert wird.

Stile werden standardmäßig durch Render-Blocking blockiert, und Skripte können mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) render-blockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und immer konsistent gerendert wird, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element schließen Sie die folgenden Attribute ein:

- `rel="expect"` um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um das Rendern eines HTML auf der Seite zu blockieren.
- `href="#element-id"` um die ID des Elements anzugeben, das Sie render-blocken möchten.
- `blocking="render"` um das angegebene HTML zu render-blocken.

Lassen Sie uns anschauen, wie dies mit einem Beispiel-HTML-Dokument aussieht:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async src="layout.js" blocking="render"></script>

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

Das Ergebnis ist, dass das Rendern des Dokuments blockiert wird, bis der führende Inhalt `<div>` analysiert wurde, wodurch ein konsistenter Ansichtsübergang gewährleistet wird.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel möchten Sie vielleicht das Rendern auf einer kleineren Menge von Inhalten blockieren, wenn die Seite auf einem Gerät mit schmalem Bildschirm geladen wird, im Vergleich zu einem mit einem breiten Bildschirm. Dies ergibt Sinn — auf einem mobilen Gerät wird beim ersten Laden der Seite weniger Inhalt sichtbar sein als im Fall eines Desktops.

Dies könnte mit folgendem HTML erreicht werden:

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
