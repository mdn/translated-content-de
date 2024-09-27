---
title: Progressives Laden
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In den vorherigen Schritten dieses Tutorials haben wir APIs behandelt, die uns helfen, unser [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Beispiel zu einer Progressive Web App zu machen: [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [Web Manifests](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs), [Benachrichtigungen und Push](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push). In diesem Artikel werden wir weitergehen und die Leistung der App durch progressives Laden ihrer Ressourcen verbessern.

## Erster signifikanter Aufbau

Es ist wichtig, den Nutzern so schnell wie möglich etwas Signifikantes zu liefern — je länger sie darauf warten, dass die Seite geladen wird, desto höher ist die Wahrscheinlichkeit, dass sie die Seite verlassen, bevor alles fertig geladen ist. Wir sollten in der Lage sein, ihnen zumindest die grundlegende Ansicht der Seite zu zeigen, die sie sehen möchten, mit Platzhaltern an den Stellen, an denen später mehr Inhalte geladen werden.

Dies könnte durch progressives Laden erreicht werden — auch bekannt als [Lazy Loading](https://de.wikipedia.org/wiki/Lazy_Loading). Dabei geht es darum, das Laden von so vielen Ressourcen wie möglich (HTML, CSS, JavaScript) zu verschieben und nur die sofort zu laden, die wirklich für das erste Erlebnis benötigt werden.

## Bündeln versus Aufteilen

Viele Besucher durchlaufen nicht jede einzelne Seite einer Website, dennoch ist der übliche Ansatz, jede Funktion, die wir haben, in eine große Datei zu packen. Eine `bundle.js`-Datei kann viele Megabytes umfassen, und ein einzelnes `style.css`-Bundle kann alles von grundlegenden CSS-Strukturdefinitionen bis zu allen möglichen Stilen jeder Version der Seite enthalten: mobil, Tablet, Desktop, nur Druck usw.

Es ist schneller, all diese Informationen als eine Datei zu laden anstatt viele kleine, aber wenn der Nutzer nicht alles von Anfang an benötigt, könnten wir nur das laden, was entscheidend ist, und dann andere Ressourcen bei Bedarf verwalten.

## Renderblockierende Ressourcen

Bündeln ist ein Problem, weil der Browser das HTML, CSS und JavaScript laden muss, bevor er die gerenderten Ergebnisse auf den Bildschirm zeichnen kann. In den wenigen Sekunden zwischen dem ersten Aufruf der Website und dem Abschluss des Ladens sieht der Nutzer eine leere Seite, was eine schlechte Erfahrung ist.

Um das zu beheben, können wir beispielsweise `defer` zu JavaScript-Dateien hinzufügen:

```html
<script src="app.js" defer></script>
```

Sie werden heruntergeladen und _nach_ dem Parsen des Dokuments ausgeführt, sodass sie das Rendern der HTML-Struktur nicht blockieren.

Eine weitere Technik ist das Laden von JavaScript-Modulen mithilfe von [dynamic import](/de/docs/Web/JavaScript/Reference/Operators/import), nur wenn sie benötigt werden.

Zum Beispiel, wenn eine Website einen Suchbutton hat, können wir das JavaScript für die Suchfunktion laden, nachdem der Nutzer auf den Suchbutton geklickt hat:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Sobald der Nutzer auf den Button klickt, wird der asynchrone Klick-Handler aufgerufen. Die Funktion wartet, bis das Modul geladen ist, und ruft dann die `loadAutoComplete()`-Funktion auf, die von diesem Modul exportiert wird. Das `search.js`-Modul wird daher nur heruntergeladen, geparst und ausgeführt, wenn die Interaktion stattfindet.

Wir können auch CSS-Dateien aufteilen und Medientypen zu ihnen hinzufügen:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Dies wird dem Browser mitteilen, sie nur zu laden, wenn die Bedingung erfüllt ist.

In unserer js13kPWA-Demo-App ist das CSS einfach genug, um alles in einer einzigen Datei zu belassen, ohne spezielle Regeln dafür, wie man sie lädt. Wir könnten noch weiter gehen und alles aus `style.css` in den `<style>`-Tag im `<head>` von `index.html` verschieben — dies würde die Leistung noch weiter verbessern, aber für die Lesbarkeit des Beispiels werden wir auch diesen Ansatz überspringen.

## Bilder

Neben JavaScript und CSS enthalten Websites wahrscheinlich eine Reihe von Bildern. Wenn Sie {{htmlelement("img")}}-Elemente in Ihrem HTML einfügen, wird jedes referenzierte Bild beim ersten Aufruf der Website abgerufen und heruntergeladen. Es ist nicht ungewöhnlich, vor der Ankündigung, dass die Seite bereit ist, Megabytes an Bilddaten herunterzuladen, aber das führt wiederum zu einer schlechten Wahrnehmung der Leistung. Wir benötigen nicht alle Bilder in der besten möglichen Qualität bereits zu Beginn der Besichtigung der Seite.

Dies kann optimiert werden. Zunächst sollten Sie Werkzeuge oder Dienste ähnlich wie [TinyPNG](https://tinypng.com/) verwenden, die die Dateigröße Ihrer Bilder reduzieren, ohne die Qualität zu sehr zu verändern. Wenn Sie diesen Punkt hinter sich gelassen haben, können Sie anfangen, über die Optimierung des Bildladens mithilfe von JavaScript nachzudenken. Wir erklären dies im Folgenden.

### Platzhalterbild

Anstatt alle Screenshots von Spielen in den `src`-Attributen der `<img>`-Elemente zu referenzieren, was den Browser dazu zwingt, sie automatisch herunterzuladen, können wir es selektiv über JavaScript tun. Die js13kPWA-App verwendet stattdessen ein Platzhalterbild, das klein und leicht ist, während die endgültigen Pfade zu den Zielbildern in `data-src`-Attributen gespeichert werden:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Diese Bilder werden nach dem Aufbau der HTML-Struktur der Seite über JavaScript geladen. Das Platzhalterbild wird genauso skaliert wie die Originalbilder, sodass es den gleichen Platz einnimmt und nicht dazu führt, dass das Layout während des Ladens der Bilder neu gezeichnet wird.

### Laden über JavaScript

Die Datei `app.js` verarbeitet die `data-src`-Attribute wie folgt:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

Die Variable `imagesToLoad` enthält Referenzen zu allen Bildern, während die Funktion `loadImages` den Pfad von `data-src` nach `src` verschiebt. Wenn jedes Bild tatsächlich geladen ist, entfernen wir sein `data-src`-Attribut, da es nicht mehr benötigt wird. Dann durchlaufen wir jedes Bild und laden es:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Unschärfe in CSS

Um den gesamten Prozess optisch ansprechender zu gestalten, wird der Platzhalter in CSS unscharf dargestellt.

![Screenshot von Platzhalterbildern in der js13kPWA-App.](js13kpwa-placeholders.png)

Wir rendern die Bilder von Anfang an mit Unschärfe, sodass ein Übergang zum scharfen Bild erreicht werden kann:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Dies wird den Unschärfeeffekt innerhalb einer halben Sekunde entfernen, was für den "Lade"-Effekt gut genug aussieht.

## Laden auf Anfrage

Der im obigen Abschnitt besprochene Mechanismus zum Laden von Bildern funktioniert in Ordnung — er lädt die Bilder nach dem Rendern der HTML-Struktur und wendet einen schönen Übergangseffekt im Prozess an. Das Problem ist, dass er immer noch _alle_ Bilder auf einmal lädt, auch wenn der Nutzer bei Seitenaufruf nur die ersten zwei oder drei Bilder sieht.

Dieses Problem kann gelöst werden, indem die Bilder nur bei Bedarf geladen werden: Das nennt sich _Lazy Loading_. [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) ist eine Technik, um Bilder nur dann zu laden, wenn sie im Ansichtsfenster erscheinen. Es gibt mehrere Möglichkeiten, dem Browser zu sagen, dass er Bilder verzögert laden soll.

### Das `loading`-Attribut im \<img\>

Die einfachste Möglichkeit, dem Browser mitzuteilen, Elemente verzögert zu laden, umfasst kein JavaScript. Sie fügen dem {{HTMLElement("img")}}-Element das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut mit dem Wert `lazy` hinzu, und der Browser weiß, dass er dieses Bild nur laden soll, wenn es benötigt wird.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Intersection Observer

Dies ist eine progressive Verbesserung des zuvor funktionierenden Beispiels — der [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) wird Zielbilder nur dann laden, wenn der Nutzer nach unten scrollt und sie im Ansichtsfenster angezeigt werden.

Hier sieht man, wie der relevante Code aussieht:

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

Wenn das [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt unterstützt wird, erstellt die App eine neue Instanz davon. Die als Parameter übergebene Funktion behandelt den Fall, wenn ein oder mehrere Elemente mit dem Beobachter schneiden (d.h., im Ansichtsfenster erscheinen). Wir können über jeden Fall iterieren und entsprechend reagieren — wenn ein Bild sichtbar ist, laden wir das richtige Bild und hören auf, es zu beobachten, da wir es nicht mehr beobachten müssen.

Wiederholen wir noch einmal unsere frühere Erwähnung der progressiven Verbesserung — der Code ist so geschrieben, dass die App funktioniert, unabhängig davon, ob der Intersection Observer unterstützt wird oder nicht. Wenn nicht, laden wir die Bilder einfach mit dem zuvor beschriebenen, einfacheren Ansatz.

## Verbesserungen

Denken Sie daran, dass es viele Möglichkeiten gibt, Ladezeiten zu optimieren, und dieses Beispiel nur einen der Ansätze untersucht. Sie könnten versuchen, Ihre Apps robuster zu machen, indem Sie sie ohne JavaScript funktionieren lassen — entweder mit {{htmlelement("noscript")}}, um das Bild mit bereits zugewiesenem endgültigen `src` anzuzeigen, oder indem Sie `<img>`-Tags mit {{htmlelement("a")}}-Elementen umwickeln, die auf die Zielbilder verweisen, damit der Nutzer darauf klicken und sie bei Bedarf erreichen kann.

Wir werden das nicht tun, weil die App selbst von JavaScript abhängig ist — ohne es würde die Spieleliste nicht einmal geladen und der Service Worker-Code nicht ausgeführt.

Wir könnten den Ladeprozess umschreiben, um nicht nur die Bilder, sondern die vollständigen Elemente mit vollständigen Beschreibungen und Links zu laden. Es würde wie ein unendliches Scrollen funktionieren — die Elemente auf der Liste würden erst geladen, wenn der Nutzer die Seite nach unten scrollt. Auf diese Weise wäre die anfängliche HTML-Struktur minimal, die Ladezeit noch kürzer, und wir würden noch größere Leistungsverbesserungen erzielen.

## Fazit

Weniger Dateien, die zu Anfang geladen werden müssen, kleinere Dateien, die in Module aufgeteilt werden, die Verwendung von Platzhaltern und das nachträgliche Laden von Inhalten auf Abruf — all das wird helfen, schnellere anfängliche Ladezeiten zu erreichen, was dem App-Ersteller Vorteile bringt und den Nutzern ein reibungsloseres Erlebnis bietet.

Denken Sie an den Ansatz der progressiven Verbesserung — bieten Sie ein nutzbares Produkt unabhängig vom Gerät oder der Plattform an, bereichern Sie aber die Erfahrung für diejenigen, die moderne Browser verwenden.

## Abschließende Gedanken

Das war alles für diese Tutorial-Serie — wir haben den [Quellcode der js13kPWA-Beispiel-App](https://github.com/mdn/pwa-examples/tree/main/js13kpwa) durchgegangen und dabei die [PWA-Struktur](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), die [Offline-Verfügbarkeit mit Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [installierbare PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und schließlich [Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) kennengelernt.

In diesem Artikel haben wir das Konzept des progressiven Ladens untersucht, einschließlich eines interessanten Beispiels unter Verwendung der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API).

Fühlen Sie sich frei, mit dem Code zu experimentieren, Ihre bestehende App mit PWA-Funktionen zu bereichern oder etwas völlig Neues auf eigene Faust zu erstellen. PWAs bieten einen großen Vorteil gegenüber regulären Web-Apps.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
