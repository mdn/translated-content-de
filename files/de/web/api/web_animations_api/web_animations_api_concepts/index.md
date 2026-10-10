---
title: Konzepte der Web Animations API
slug: Web/API/Web_Animations_API/Web_Animations_API_Concepts
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API (WAAPI) ermöglicht JavaScript-Entwicklern den Zugriff auf die Animations-Engine des Browsers und beschreibt, wie Animationen browserübergreifend implementiert werden sollen. Dieser Artikel stellt Ihnen die wichtigsten Konzepte hinter der WAAPI vor und vermittelt Ihnen ein theoretisches Verständnis ihrer Funktionsweise, damit Sie sie effektiv einsetzen können. Wie Sie die API praktisch verwenden, erfahren Sie im ergänzenden Artikel [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

Die Web Animations API schließt die Lücke zwischen deklarativen CSS-Animationen und -Übergängen einerseits und dynamischen JavaScript-Animationen andererseits. Sie können damit CSS-ähnliche Animationen erstellen und verändern, die von einem vordefinierten Zustand in einen anderen übergehen. Mithilfe von Variablen, Schleifen und Callbacks lassen sich außerdem interaktive Animationen erstellen, die sich an veränderte Eingaben anpassen und darauf reagieren.

## Geschichte

Vor mehr als einem Jahrzehnt brachte die [Synchronized Multimedia Integration Language, kurz SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) (ausgesprochen „smile“) Animationen in SVG. Damals war sie die einzige Animations-Engine, mit der sich Browser befassen mussten. Obwohl vier von fünf Browsern SMIL unterstützten, konnte sie nur SVG-Elemente animieren, ließ sich nicht über CSS verwenden und war sehr komplex – was häufig zu uneinheitlichen Implementierungen führte. Zehn Jahre später stellte das Safari-Team die Spezifikationen für [CSS Animations](https://drafts.csswg.org/css-animations/) und [CSS Transitions](https://drafts.csswg.org/css-transitions/) vor.

Das Internet-Explorer-Team forderte eine Animations-API, um die Animationsfunktionen browserübergreifend zu vereinheitlichen und zu standardisieren. Daraufhin begannen Entwickler von Mozilla Firefox und Google Chrome, an einer gemeinsamen Animationsspezifikation zu arbeiten: der Web Animations API. Heute bildet die WAAPI die Grundlage für künftige Animationsspezifikationen, sodass diese konsistent bleiben und gut zusammenarbeiten können. Zugleich bietet sie einen gemeinsamen Bezugspunkt, an dem sich alle Browser bei der Umsetzung der derzeit verfügbaren Spezifikationen orientieren können.

![Eine Illustration, die zeigt, wie die Web Animations API CSS Transitions und CSS Animations sowie eine dritte, mit einem Fragezeichen gekennzeichnete Kategorie für künftige Animationsspezifikationen zusammenführt.](waapi_diagram_white.png)

## Die zwei Modelle: Timing und Animation

Die Web Animations API basiert auf zwei Modellen: Das Timing-Modell verarbeitet die Zeit, während das Animationsmodell die visuellen Veränderungen im Zeitverlauf beschreibt. Das Timing-Modell verfolgt, wie weit eine festgelegte Zeitleiste fortgeschritten ist. Das Animationsmodell bestimmt, wie das animierte Objekt zu einem bestimmten Zeitpunkt aussehen soll.

### Timing

Das Timing-Modell bildet die Grundlage für die Arbeit mit der WAAPI. Jedes Dokument hat eine übergeordnete Zeitleiste, [`Document.timeline`](/de/docs/Web/API/Document/timeline), die vom Laden der Seite bis in die Unendlichkeit reicht – oder bis das Fenster geschlossen wird. Entsprechend ihrer Dauer sind die Animationen auf dieser Zeitleiste verteilt. Jede Animation ist über ihre [`startTime`](/de/docs/Web/API/Animation/startTime) an einem Punkt der Zeitleiste verankert. Dieser Punkt bezeichnet den Zeitpunkt, zu dem die Animation auf der Zeitleiste des Dokuments zu laufen beginnt.

Die gesamte Wiedergabe einer Animation richtet sich nach dieser Zeitleiste: Wenn Sie innerhalb der Animation zu einer anderen Stelle springen, verschiebt sich ihre Position auf der Zeitleiste. Wird die Wiedergabegeschwindigkeit verringert oder erhöht, dehnt sich die Animation auf der Zeitleiste aus oder wird gestaucht. Bei Wiederholungen reihen sich weitere Durchläufe entlang der Zeitleiste an. Künftig könnte es auch Zeitleisten geben, die auf Gesten oder der Scrollposition beruhen, oder sogar über- und untergeordnete Zeitleisten. Die Web Animations API eröffnet viele Möglichkeiten!

### Animation

Das Animationsmodell lässt sich als eine Reihe von Momentaufnahmen vorstellen, die zeigen, wie die Animation zu verschiedenen Zeitpunkten ihrer Dauer aussehen kann.

![Eine Illustration, die das Animationsmodell als eine Reihe von Momentaufnahmen entlang einer Zeitleiste zeigt. Die Bilder zeigen die Grinsekatze von Sekunde 0 (vollständig sichtbar) bis Sekunde 8 (nur noch ihr Grinsen ist zu sehen).](waapi_timing_diagram_white.png)

## Grundlegende Konzepte

Webanimationen entstehen durch das Zusammenspiel von Timeline-Objekten, Animation-Objekten und Animation-Effect-Objekten. Indem Sie diese verschiedenen Objekte zusammenfügen, können Sie eigene Animationen erstellen.

### Timeline

Timeline-Objekte stellen die nützliche Eigenschaft [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime) bereit. Damit können Sie feststellen, wie lange die Seite bereits geöffnet ist: Sie gibt die „aktuelle Zeit“ auf der Zeitleiste des Dokuments an, die beim Öffnen der Seite begann. Derzeit gibt es nur eine Art von Timeline-Objekt: eines, das auf der [`timeline`](/de/docs/Web/API/Document/timeline) des aktiven Dokuments basiert. Künftig könnte es Timeline-Objekte geben, die beispielsweise der Länge der Seite entsprechen – etwa ein `ScrollTimeline` – oder auf ganz anderen Grundlagen beruhen.

### Animation

[Animation-Objekte](/de/docs/Web/API/Animation) können Sie sich wie DVD-Player vorstellen: Sie dienen zur Steuerung der Wiedergabe, können aber ohne ein abzuspielendes Medium nichts bewirken. Animation-Objekte erhalten dieses Medium in Form von Animation Effects, genauer gesagt Keyframe Effects (dazu gleich mehr). Wie bei einem DVD-Player können Sie mit den Methoden eines Animation-Objekts die Animation [abspielen](/de/docs/Web/API/Animation/play), [pausieren](/de/docs/Web/API/Animation/pause), [zu einer bestimmten Stelle springen](/de/docs/Web/API/Animation/currentTime) sowie ihre [Wiedergaberichtung](/de/docs/Web/API/Animation/reverse) und [Geschwindigkeit](/de/docs/Web/API/Animation/playbackRate) steuern.

![Eine Illustration, die veranschaulicht, dass ein Animation-Objekt einen KeyframeEffect abspielt, so wie ein DVD-Player eine DVD abspielt.](waapi_player_diagram_white.png)

### Animation Effect

Wenn Animation-Objekte DVD-Player sind, können Sie sich Animation Effects beziehungsweise Keyframe Effects als DVDs vorstellen. Ein Keyframe Effect bündelt Informationen, zu denen mindestens eine Reihe von Keyframes und die Dauer gehören, über die diese animiert werden sollen. Das Animation-Objekt verwendet diese Informationen und das Timeline-Objekt, um daraus eine abspielbare Animation zusammenzusetzen, die Sie ansehen und auf die Sie zugreifen können.

Derzeit steht nur ein Typ von Animation Effect zur Verfügung: [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Künftig könnte es viele weitere Animation Effects geben, etwa zum Gruppieren und Aneinanderreihen von Effekten – ähnlich den Funktionen, die Flash bot. Group Effects und Sequence Effects sind bereits in der derzeit in Arbeit befindlichen Level-2-Spezifikation der Web Animations API beschrieben.

### Eine Animation aus verschiedenen Teilen zusammensetzen

Sie können all diese Teile mit dem [`Animation()`-Konstruktor](/de/docs/Web/API/Animation/Animation) zu einer funktionsfähigen Animation zusammensetzen oder die Kurzform [`Element.animate()`](/de/docs/Web/API/Element/animate) verwenden. (Mehr über die Verwendung von `Element.animate()` erfahren Sie unter [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).)

## Einsatzmöglichkeiten

Mit der API lassen sich sowohl dynamische Animationen erstellen, die Sie zur Laufzeit aktualisieren können, als auch einfachere, deklarative Animationen, wie sie mit CSS möglich sind. In automatisierten Tests können Sie damit sicherstellen, dass Animationen Ihrer Benutzeroberfläche korrekt ablaufen. Die API macht die Rendering-Engine des Browsers für die Entwicklung von Animationswerkzeugen wie Zeitleisten zugänglich. Außerdem bietet sie eine leistungsfähige Grundlage für eigene oder kommerzielle Animationsbibliotheken. (Siehe [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/).) In manchen Fällen kann sie eine umfangreiche Bibliothek sogar vollständig ersetzen – ähnlich wie sich für viele Aufgaben reines JavaScript ohne jQuery verwenden lässt.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API) — Hauptseite
- [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) — Leitfaden
- Die [vollständige Sammlung von Alice-im-Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Ausprobieren, Forken und Teilen
