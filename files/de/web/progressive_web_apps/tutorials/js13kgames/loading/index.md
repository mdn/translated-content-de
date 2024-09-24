---
title: Progressives Laden
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In den vorherigen Schritten dieses Tutorials haben wir APIs behandelt, die uns helfen, unser [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Beispiel zu einer Progressive Web App zu machen: [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [Web Manifests](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs), [Benachrichtigungen und Push](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push). In diesem Artikel gehen wir weiter und verbessern die Leistung der App, indem wir ihre Ressourcen progressiv laden.

## First meaningful paint

Es ist wichtig, dem Benutzer so schnell wie möglich etwas Bedeutungsvolles zu liefern – je länger er auf das Laden der Seite wartet, desto größer ist die Wahrscheinlichkeit, dass er die Seite verlässt, bevor alles geladen ist. Wir sollten in der Lage sein, ihnen zumindest die Grundansicht der Seite zu zeigen, die sie sehen möchten, mit Platzhaltern an den Stellen, an denen mehr Inhalte später geladen werden.

Dies könnte durch progressives Laden erreicht werden – auch bekannt als [Lazy Loading](https://en.wikipedia.org/wiki/Lazy_loading). Es geht darum, das Laden so vieler Ressourcen wie möglich (HTML, CSS, JavaScript) zu verzögern und nur jene sofort zu laden, die wirklich für das erste Erlebnis benötigt werden.

## Bündelung versus Aufteilung

Viele Besucher werden nicht jede einzelne Seite einer Website durchgehen, dennoch ist der übliche Ansatz, jede Funktion, die wir haben, in eine große Datei zu bündeln. Eine `bundle.js` Datei kann viele Megabytes groß sein, und ein einzelnes `style.css` Bundle kann alles enthalten, von grundlegenden CSS-Strukturdefinitionen bis hin zu allen möglichen Stilen jeder Version der Seite: mobil, Tablet, Desktop, nur Druck, etc.

Es ist schneller, all diese Informationen als eine Datei zu laden, anstatt viele kleine, aber wenn der Benutzer nicht alles von Anfang an benötigt, könnten wir nur das Wesentliche laden und andere Ressourcen nach Bedarf verwalten.

## Render-blockierende Ressourcen

Das Bündeln ist ein Problem, weil der Browser das HTML, CSS und JavaScript laden muss, bevor er deren gerenderte Ergebnisse auf den Bildschirm zeichnen kann. In den wenigen Sekunden zwischen dem ersten Zugriff auf die Website und dem Abschluss des Ladens sieht der Benutzer eine leere Seite, was eine schlechte Erfahrung ist.

Um das zu beheben, können wir zum Beispiel `defer` zu JavaScript-Dateien hinzufügen:

```html
<script src="app.js" defer></script>
```

Sie werden heruntergeladen und ausgeführt, _nachdem_ das Dokument selbst geparst wurde, sodass es das Rendern der HTML-Struktur nicht blockiert.

Eine weitere Technik ist das Laden von JavaScript-Modulen mithilfe von [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) nur bei Bedarf.

Wenn eine Website beispielsweise einen Suchbutton hat, können wir das JavaScript für die Suchfunktion laden, nachdem der Benutzer auf den Suchbutton geklickt hat:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Sobald der Benutzer auf den Button klickt, wird der asynchrone Click-Handler aufgerufen. Die Funktion wartet, bis das Modul geladen ist, und ruft dann die `loadAutoComplete()` Funktion auf, die aus diesem Modul exportiert wird. Das `search.js` Modul wird daher nur heruntergeladen, geparst und ausgeführt, wenn die Interaktion stattfindet.

Wir können auch CSS-Dateien aufteilen und Medientypen hinzufügen:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Dies wird dem Browser mitteilen, sie nur zu laden, wenn die Bedingung erfüllt ist.

In unserer js13kPWA-Demo-App ist das CSS einfach genug, um es in einer einzigen Datei zu lassen, ohne spezifische Regeln, wie sie geladen werden sollen. Wir könnten noch weiter gehen und alles von `style.css` in das `<style>` Tag im `<head>` von `index.html` verschieben – dies würde die Leistung noch weiter verbessern, aber zugunsten der Lesbarkeit des Beispiels werden wir diesen Ansatz auch überspringen.

## Bilder

Neben JavaScript und CSS enthalten Websites wahrscheinlich eine Reihe von Bildern. Wenn Sie {{htmlelement("img")}} Elemente in Ihren HTML-Code einfügen, wird jedes referenzierte Bild während des ersten Website-Zugriffs abgerufen und heruntergeladen. Es ist nicht ungewöhnlich, dass mehrere Megabytes an Bilddaten heruntergeladen werden müssen, bevor die Seite als bereit gilt, aber dies erzeugt wiederum eine schlechte Wahrnehmung der Leistung. Wir benötigen nicht alle Bilder in der bestmöglichen Qualität gleich zu Beginn der Betrachtung der Seite.

Dies kann optimiert werden. Erstens sollten Sie Tools oder Dienste wie [TinyPNG](https://tinypng.com/) verwenden, die die Dateigröße Ihrer Bilder reduzieren, ohne die Qualität zu stark zu verändern. Wenn Sie diesen Punkt bereits überwunden haben, können Sie darüber nachdenken, die Bildladung mit JavaScript zu optimieren. Wir erklären dies unten.

### Platzhalterbild

Statt alle Screenshots von Spielen, die in `<img>` Element `src` Attributen referenziert werden, was den Browser dazu zwingt, sie automatisch herunterzuladen, können wir dies selektiv über JavaScript tun. Die js13kPWA App verwendet stattdessen ein Platzhalterbild, das klein und leichtgewichtig ist, während die endgültigen Pfade zu den Zielbildern in `data-src` Attributen gespeichert sind:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Diese Bilder werden _nachdem_ die Seite die HTML-Struktur fertiggestellt hat, über JavaScript geladen. Das Platzhalterbild wird genauso skaliert wie die Originalbilder, sodass es denselben Platz einnimmt und das Layout nicht neu gestrichen wird, während die Bilder geladen werden.

### Laden via JavaScript

Die Datei `app.js` verarbeitet die `data-src` Attribute wie folgt:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

Die Variable `imagesToLoad` enthält Verweise auf alle Bilder, während die Funktion `loadImages` den Pfad von `data-src` auf `src` verschiebt. Wenn jedes Bild tatsächlich geladen wird, entfernen wir das `data-src` Attribut, da es nicht mehr benötigt wird. Dann durchlaufen wir jedes Bild und laden es:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Unschärfe in CSS

Um den gesamten Prozess visuell ansprechender zu gestalten, wird der Platzhalter in CSS unscharf gemacht.

![Screenshot von Platzhalterbildern in der js13kPWA App.](js13kpwa-placeholders.png)

Wir rendern die Bilder zu Beginn mit einer Unschärfe, sodass ein Übergang zum scharfen Bild erreicht werden kann:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Dies entfernt den Unschärfeeffekt innerhalb einer halben Sekunde, was für den "Lade"-Effekt gut genug aussieht.

## Laden auf Anfrage

Der im obigen Abschnitt besprochene Bildlade-Mechanismus funktioniert gut — er lädt die Bilder nach dem Rendern der HTML-Struktur und sorgt für einen schönen Übergangseffekt während des Prozesses. Das Problem ist, dass er dennoch _alle_ Bilder auf einmal lädt, obwohl der Benutzer beim Laden der Seite nur die ersten zwei oder drei sehen wird.

Dieses Problem kann gelöst werden, indem die Bilder nur bei Bedarf geladen werden: Dies nennt man _Lazy Loading_. [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) ist eine Technik, um Bilder nur dann zu laden, wenn sie im Anzeigebereich erscheinen. Es gibt mehrere Möglichkeiten, den Browser dazu zu veranlassen, Bilder lazy zu laden.

### Das Ladeattribut auf \<img>

Die einfachste Möglichkeit, dem Browser mitzuteilen, dass er lazy laden soll, erfordert kein JavaScript. Sie fügen das [`loading`](/de/docs/Web/HTML/Element/img#loading) Attribut zu einem {{HTMLElement("img")}} Element mit dem Wert `lazy` hinzu, und der Browser weiß, dass dieses Bild nur bei Bedarf geladen werden soll.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Intersection Observer

Dies ist eine progressive Verbesserung des zuvor funktionierenden Beispiels — [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) lädt Zielbilder nur, wenn der Benutzer nach unten scrollt und sie dadurch im Anzeigebereich erscheinen.

So sieht der relevante Code aus:

```js
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
```

Wenn das {{domxref("IntersectionObserver")}} Objekt unterstützt wird, erstellt die App eine neue Instanz davon. Die als Parameter übergebene Funktion behandelt den Fall, wenn ein oder mehrere Elemente mit dem Observer interagieren (d.h. im Anzeigebereich erscheinen). Wir können über jeden Fall iterieren und entsprechend reagieren — wenn ein Bild sichtbar wird, laden wir das korrekte Bild und hören auf, es zu beobachten, da wir es nicht mehr beobachten müssen.

Lassen Sie uns die zuvor erwähnte progressive Verbesserung noch einmal betonen — der Code ist so geschrieben, dass die App funktioniert, unabhängig davon, ob Intersection Observer unterstützt wird oder nicht. Wenn nicht, laden wir die Bilder einfach mit dem zuvor behandelten grundlegenderen Ansatz.

## Verbesserungen

Denken Sie daran, dass es viele Möglichkeiten gibt, Ladezeiten zu optimieren, und dieses Beispiel nur einen der Ansätze untersucht. Sie könnten versuchen, Ihre Apps absichernder zu machen, indem Sie sie ohne JavaScript funktionsfähig machen — entweder durch die Verwendung von {{htmlelement("noscript")}}, um das Bild mit bereits zugewiesenem finalen `src` anzuzeigen, oder indem Sie `<img>` Tags mit {{htmlelement("a")}} Elementen umwickeln, die auf die Zielbilder verweisen, sodass der Benutzer klicken und darauf zugreifen kann, wenn gewünscht.

Wir werden dies nicht tun, da die App selbst von JavaScript abhängig ist — ohne es würde die Liste der Spiele nicht einmal geladen, und der Service Worker Code würde nicht ausgeführt.

Wir könnten den Ladeprozess umschreiben, um nicht nur die Bilder, sondern die vollständigen Elemente, bestehend aus vollständigen Beschreibungen und Links, zu laden. Es würde wie ein unendliches Scrollen funktionieren — die Elemente auf der Liste laden sich nur, wenn der Benutzer die Seite nach unten scrollt. Auf diese Weise wäre die anfängliche HTML-Struktur minimal, die Ladezeit noch kürzer, und wir hätten noch größere Leistungsverbesserungen.

## Fazit

Weniger Dateien, die anfänglich geladen werden müssen, kleinere Dateien, die in Module aufgeteilt sind, Verwendung von Platzhaltern und Laden von mehr Inhalten auf Anfrage — dies wird dazu beitragen, schnellere anfängliche Ladezeiten zu erreichen, was sowohl Vorteile für den Ersteller der App als auch ein reibungsloseres Erlebnis für den Benutzer bietet.

Denken Sie an den Ansatz der progressiven Verbesserung — bieten Sie ein nutzbares Produkt, unabhängig vom Gerät oder der Plattform, aber bereichern Sie das Erlebnis für diejenigen, die moderne Browser verwenden.

## Abschließende Gedanken

Das war alles für diese Tutorial-Reihe — wir haben den [Quellcode der js13kPWA-Beispiel-App](https://github.com/mdn/pwa-examples/tree/main/js13kpwa) durchgearbeitet und über die [PWA-Struktur](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), [Offline-Verfügbarkeit mit Service Workern](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [installierbare PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und schließlich [Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) gelernt.

Und in diesem Artikel haben wir das Konzept des progressiven Ladens untersucht, einschließlich eines interessanten Beispiels, das die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) verwendet.

Experimentieren Sie gerne mit dem Code, erweitern Sie Ihre bestehende App mit PWA-Funktionen oder erstellen Sie etwas ganz Neues. PWAs bieten einen großen Vorteil gegenüber regulären Web-Apps.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
