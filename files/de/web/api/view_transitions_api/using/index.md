---
title: Die View Transitions API verwenden
slug: Web/API/View_Transitions_API/Using
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("View Transitions API")}}

Dieser Artikel erklärt die Theorie, wie die [View Transitions API](/de/docs/Web/API/View_Transitions_API) funktioniert, wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst, und wie man aktive Ansichtsübergänge manipuliert. Dies umfasst Ansichtsübergänge für sowohl DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Prozess des Ansichtsübergangs

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt von der Art des Ansichtsübergangs ab:
   - Bei gleichbleibenden Dokumentübergängen (SPAs) wird ein Ansichtsübergang durch das Übergeben der Funktion, die die Ansicht ändern würde, als Callback zur [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode ausgelöst.
   - Bei Dokumentenübergreifenden Übergängen (MPAs) wird ein Ansichtsübergang durch die Initialisierung der Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen sich am selben Ursprung befinden und durch Einfügen einer {{cssxref("@view-transition")}} Regel in ihrem CSS mit einem `navigation` Deskriptor von `auto` am Ansichtsübergang teilnehmen.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel, zurückgegeben von `startViewTransition()` im Fall von gleichbleibenden Dokumentübergängen (SPA)). Das `ViewTransition` Objekt enthält mehrere Promises, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Ansichtsübergangprozesses auszuführen. Weitere Informationen finden Sie unter [Steuerung von Ansichtsübergängen mit JavaScript](#steuerung_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API Momentaufnahmen von Elementen, die ein {{cssxref("view-transition-name")}} deklariert haben.
3. Der Ansichtswechsel erfolgt:

   - Im Fall von gleichbleibenden Dokumentübergängen (SPAs) wird der Callback, der an `startViewTransition()` übergeben wurde, aufgerufen, was die Änderung des DOM verursacht.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Promise [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, was Ihnen ermöglicht, auf die DOM-Aktualisierung zu reagieren.

   - Im Fall von dokumentenübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen den aktuellen und Zieldokumenten.

4. Die API erfasst Momentaufnahmen von der neuen Ansicht als Live-Darstellung.

   Zu diesem Zeitpunkt steht der Ansichtsübergang kurz vor der Ausführung, und das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, was Ihnen ermöglicht, beispielsweise eine benutzerdefinierte JavaScript-Animation anstelle der Standardanimation auszuführen.

5. Die alten Seitenmomentaufnahmen animieren "aus", während die neuen Ansichtsmomentaufnahmen "ein" animieren. Standardmäßig animieren die alten Ansichtsaufnahmen von {{cssxref("opacity")}} 1 zu 0 und die neuen Ansichtsaufnahmen von `opacity` 0 zu 1, wodurch ein Überblenden entsteht.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das Promise [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, was Ihnen ermöglicht zu reagieren.

> [!NOTE]
> Wenn der [Seitensichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument von einem Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browsertab aktiv ist) während eines [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Aufrufs, wird der Ansichtsübergang vollständig übersprungen.

### Der Pseudo-Element-Baum des Ansichtsübergangs

Um die Erstellung der ausgehenden und ankommenden Übergangsanimationen zu behandeln, konstruiert die API einen Pseudo-Element-Baum mit folgender Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}} Unterbaum wird für jede erfasste `view-transition-name` erstellt.

Im Fall von gleichbleibenden Dokumentübergängen (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Im Fall von dokumentenübergreifenden Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument bereitgestellt.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel der Ansichtsübergangsüberlagerung, die alle Ansichtsübergangsschnappschussgruppen enthält und über dem restlichen Seiteninhalt sitzt.
- Ein {{cssxref("::view-transition-group")}} fungiert als Container für jede Ansichtsübergangsschnappschussgruppe. Das Argument `root` spezifiziert die Standard-Schnappschussgruppe — die Ansichtsübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}} Element, da die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das obige zurücksetzen und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old")}} zielt auf die statische Momentaufnahme des alten Seitenelements ab, und {{cssxref("::view-transition-new")}} zielt auf die Live-Momentaufnahme des neuen Seitenelements ab. Beide werden als ersetzter Inhalt gerendert, in derselben Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit nützlichen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, unterschiedliche DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen anzusprechen, indem ein unterschiedlicher {{cssxref("view-transition-name")}} für jedes festgelegt wird. In solchen Fällen wird ein `::view-transition-group` für jedes erstellt. Siehe [Unterschiedliche Animationen für verschiedene Elemente](#unterschiedliche_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und ankommenden Animationen anzupassen, die {{cssxref("::view-transition-old")}} und {{cssxref("::view-transition-new")}} Pseudo-Elemente mit Ihren Animationen ansprechen.

## Erstellen eines einfachen Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie man einen einfachen Ansichtsübergang erstellt, sowohl im Fall von SPAs als auch MPAs.

### Einfacher SPA-Ansichtsübergang

Ein Beispiel für eine SPA könnte die Fähigkeit umfassen, neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis irgendeiner Art zu aktualisieren, wie z.B. das Anklicken eines Navigationslinks oder ein Update, das vom Server gepusht wird. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies auf eine `displayNewImage()` Funktion vereinfacht, die basierend auf dem angeklickten Thumbnail ein neues Großbild zeigt. Wir haben dies in eine `updateView()` Funktion eingekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Beschriftungen als sanftes Überblenden (dem Standard-Ansichtsübergang). Es wird auch in nicht unterstützenden Browsern funktionieren, jedoch ohne die schöne Animation.

### Einfacher MPA-Ansichtsübergang

Beim Erstellen eines dokumentenübergreifenden (MPA) Ansichtsübergangs ist der Prozess sogar einfacher als bei SPAs. Kein JavaScript ist erforderlich, da die Ansichtsaktualisierung durch eine dokumentenübergreifende, gleichberechtigte Navigation und nicht durch eine JavaScript-initiierte DOM-Änderung ausgelöst wird. Um einen einfachen MPA-Ansichtsübergang zu ermöglichen, müssen Sie in das CSS für sowohl das aktuelle als auch das Zieldokument eine {{cssxref("@view-transition")}} Regel hinzufügen, um sie zu aktivieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und veranschaulicht zusätzlich, wie Sie die [ausgehenden und ankommenden Animationen](#anpassen_ihrer_animationen) des Ansichtsübergangs anpassen können.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen gleichberechtigten Ursprüngen erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die Pseudo-Elemente der View Transition haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transitions_API#pseudo-elements) detailliert sind).

Die meisten Erscheinungsübergänge haben eine standardmäßige sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge haben eine sanfte Skalierungsanimation angewendet.
- `position` und `transform` Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen in jeder gewünschten Weise mit regulärem CSS ändern — adressieren Sie die "von" Animation mit {{cssxref("::view-transition-old")}}, und die "zu" Animation mit {{cssxref("::view-transition-new")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie in Fällen, in denen Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten, das `::view-transition-group()` mit solchen Stilen ansprechen. Aufgrund der Pseudo-Element-Hierarchie und des Standard-Benutzeragenten-Stylings werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option zum Absichern Ihres Codes — `::view-transition-group()` animiert auch und Sie könnten mit unterschiedlichen Dauern für die `group`/`image-pair` Pseudo-Elemente gegenüber den `old` und `new` Pseudo-Elementen enden.

Im Fall von dokumentenübergreifenden (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beiden enthalten.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben erwähnte CSS, geht jedoch einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und diese auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente anwendet. Das Ergebnis ist, dass der standardmäßige Überblendungsübergang gegen einen "nach oben wischen" Übergang ausgetauscht wird, wenn eine Navigation stattfindet:

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

## Unterschiedliche Animationen für verschiedene Elemente

Standardmäßig werden alle verschiedenen Elemente, die sich während des Ansichtswechsels ändern, mit derselben Animation übertragen. Wenn Sie möchten, dass einige Elemente anders als die standardmäßige `root` Animation animationsieren, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel werden in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}} Elemente mit einem `view-transition-name` von `figure-caption` versehen, um sie in Bezug auf Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der erzeugte Pseudo-Element-Baum nun so aus:

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

Das Bestehen des zweiten Satzes von Pseudo-Elementen ermöglicht es, ein separates Ansichtsübergangsstyling nur auf das `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Ansichtsaufnahmen werden jeweils separat behandelt.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, was Sie möchten, außer `none` — der Wert `none` bedeutet speziell, dass das Element nicht an einem Ansichtsübergang teilnimmt.
>
> `view-transition-name` Werte müssen auch einzigartig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie am gleichen Ort zu halten und zu verhindern, dass das Standardstyling unsere benutzerdefinierten Animationen beeinträchtigt.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente zu adressieren, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als das oben genannte erzeugt. Unser endgültiger `<figcaption>` Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, da `::view-transition-group` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer sanften Skalierung überträgt. Wir mussten nur eine feste `height` auf beiden Zuständen setzen, um es zum Laufen zu bringen.

> **Hinweis:** [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Beispiele für Anpassungen.

## Steuerung von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat ein zugeordnetes [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt, das mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des Übergangs auszuführen. Beispielsweise wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudo-Element-Baum erstellt ist und die Animation im Begriff ist zu starten, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation fertig ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Das `ViewTransition` kann wie folgt erreicht werden:

1. Im Fall von gleichbleibenden Dokumentübergängen (SPAs) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) das mit dem Übergang verbundene `ViewTransition` zurück.
2. Im Fall von dokumentenübergreifenden Übergängen (MPAs):

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument im Begriff ist, aufgrund einer Navigation entladen zu werden. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf das `ViewTransition` über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition), sowie eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web
