---
title: Progressive loading
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In den vorherigen Schritten dieses Tutorials haben wir APIs behandelt, die uns helfen, unser [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/)-Beispiel zu einer Progressive Web App zu machen: [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [Web Manifests](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs), [Benachrichtigungen und Push](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push). In diesem Artikel werden wir weitergehen und die Leistung der App verbessern, indem wir ihre Ressourcen progressiv laden.

## Erste sinnvolle Darstellung

Es ist wichtig, dem Benutzer so schnell wie möglich etwas Sinnvolles zu liefern — je länger sie darauf warten, dass die Seite geladen wird, desto größer ist die Chance, dass sie abspringen, bevor alles geladen ist. Wir sollten ihnen zumindest die Grundansicht der Seite anzeigen können, die sie sehen wollen, mit Platzhaltern an den Stellen, an denen mehr Inhalt geladen wird.

Dies kann durch progressives Laden erreicht werden — auch bekannt als [Lazy Loading](https://en.wikipedia.org/wiki/Lazy_loading). Dabei geht es darum, das Laden so vieler Ressourcen wie möglich (HTML, CSS, JavaScript) zu verzögern und nur diejenigen sofort zu laden, die für das erste Erlebnis wirklich notwendig sind.

## Bündeln versus Aufteilen

Viele Besucher werden nicht jede einzelne Seite einer Website durchgehen, dennoch ist der übliche Ansatz, alle Funktionen, die wir haben, in eine große Datei zu bündeln. Eine `bundle.js`-Datei kann viele Megabyte groß sein, und ein einzelnes `style.css`-Bundle kann alles von grundlegenden CSS-Strukturdefinitionen bis zu allen möglichen Stilen jeder Version der Website enthalten: mobil, Tablet, Desktop, nur drucken usw.

Es ist schneller, all diese Informationen als eine Datei zu laden, anstatt viele kleine, aber wenn der Benutzer nicht alles von Anfang an benötigt, könnten wir nur das laden, was entscheidend ist, und andere Ressourcen bei Bedarf verwalten.

## Render-blockierende Ressourcen

Bündelung ist ein Problem, da der Browser das HTML, CSS und JavaScript laden muss, bevor er deren gerenderte Ergebnisse auf den Bildschirm zeichnen kann. In den wenigen Sekunden zwischen dem ersten Zugriff auf die Website und dem Abschluss des Ladens sieht der Benutzer eine leere Seite, was eine schlechte Erfahrung ist.

Um das zu beheben, können wir beispielsweise `defer` zu JavaScript-Dateien hinzufügen:

```html
<script src="app.js" defer></script>
```

Sie werden heruntergeladen und _nach_ dem Parsen des Dokuments ausgeführt, sodass sie das Rendern der HTML-Struktur nicht blockieren.

Eine weitere Technik besteht darin, JavaScript-Module mittels [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) nur bei Bedarf zu laden.

Wenn beispielsweise eine Website über eine Suchschaltfläche verfügt, können wir das JavaScript für die Suchfunktion laden, nachdem der Benutzer auf die Suchschaltfläche geklickt hat:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Sobald der Benutzer auf die Schaltfläche klickt, wird der asynchrone Klick-Handler aufgerufen. Die Funktion wartet, bis das Modul geladen ist, und ruft dann die `loadAutoComplete()`-Funktion auf, die aus diesem Modul exportiert wird. Das `search.js`-Modul wird daher nur heruntergeladen, geparst und ausgeführt, wenn die Interaktion stattfindet.

Wir können auch CSS-Dateien aufteilen und Medientypen zu ihnen hinzufügen:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Dies teilt dem Browser mit, sie nur zu laden, wenn die Bedingung erfüllt ist.

In unserer js13kPWA-Demo-App ist das CSS einfach genug, um es in einer einzigen Datei zu belassen, ohne spezielle Regeln, wie sie geladen werden sollen. Wir könnten noch weiter gehen und alles von `style.css` in das `<style>`-Tag im `<head>` von `index.html` verschieben — das würde die Leistung noch mehr verbessern, aber der Lesbarkeit des Beispiels zuliebe werden wir auch diesen Ansatz überspringen.

## Bilder

Neben JavaScript und CSS werden Websites wahrscheinlich eine Reihe von Bildern enthalten. Wenn Sie {{htmlelement("img")}}-Elemente in Ihr HTML einfügen, wird jedes referenzierte Bild während des ersten Zugriffs auf die Website abgerufen und heruntergeladen. Es ist nicht ungewöhnlich, dass Megabytes an Bilddaten heruntergeladen werden, bevor die Seite als bereit gemeldet wird, was wiederum eine schlechte Wahrnehmung der Leistung schafft. Wir benötigen nicht alle Bilder in bester möglicher Qualität zu Beginn der Seitennutzung.

Dies kann optimiert werden. Zunächst einmal sollten Sie Werkzeuge oder Dienste wie [TinyPNG](https://tinypng.com/) verwenden, um die Dateigröße Ihrer Bilder zu reduzieren, ohne die Qualität zu stark zu verändern. Wenn Sie diesen Punkt erreicht haben, können Sie beginnen, über die Optimierung des Bildladens mithilfe von JavaScript nachzudenken. Wir werden dies im Folgenden erläutern.

### Platzhalterbild

Anstatt alle Screenshots von Spielen in `src`-Attributen der `<img>`-Elemente zu referenzieren, was den Browser dazu zwingen würde, sie automatisch herunterzuladen, können wir dies selektiv über JavaScript tun. Die js13kPWA-App verwendet stattdessen ein Platzhalterbild, das klein und leichtgewichtig ist, während die endgültigen Pfade zu den Zielbildern in `data-src`-Attributen gespeichert werden:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Diese Bilder werden über JavaScript _nach_ dem Aufbau der HTML-Struktur der Website geladen. Das Platzhalterbild wird auf die gleiche Weise skaliert wie die Originalbilder, sodass es denselben Platz einnimmt und das Layout beim Laden der Bilder nicht neu gezeichnet wird.

### Laden über JavaScript

Die `app.js`-Datei verarbeitet die `data-src`-Attribute wie folgt:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

Die Variable `imagesToLoad` enthält Referenzen zu allen Bildern, während die Funktion `loadImages` den Pfad von `data-src` zu `src` verschiebt. Wenn jedes Bild tatsächlich geladen ist, entfernen wir das `data-src`-Attribut, da es nicht mehr benötigt wird. Dann durchlaufen wir jedes Bild und laden es:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Unschärfe in CSS

Um den gesamten Prozess optisch ansprechender zu gestalten, wird der Platzhalter in CSS unscharf dargestellt.

![Screenshot von Platzhalterbildern in der js13kPWA-App.](js13kpwa-placeholders.png)

Wir rendern die Bilder zu Beginn mit Unschärfe, sodass ein Übergang zu der scharfen Version erreicht werden kann:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Dadurch wird der Unschärfeeffekt innerhalb einer halben Sekunde entfernt, was für den "Ladevorgang" ausreichend gut aussieht.

## Laden auf Abruf

Der im obigen Abschnitt besprochene Bildlade-Mechanismus funktioniert — er lädt die Bilder nach dem Rendern der HTML-Struktur und wendet dabei einen schönen Übergangseffekt an. Das Problem ist, dass er trotzdem _alle_ Bilder auf einmal lädt, obwohl der Benutzer nur die ersten zwei oder drei beim Laden der Seite sehen wird.

Dieses Problem kann gelöst werden, indem die Bilder nur bei Bedarf geladen werden: Dies wird als _Lazy Loading_ bezeichnet. [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) ist eine Technik, um Bilder nur dann zu laden, wenn sie im Sichtbereich erscheinen. Es gibt mehrere Möglichkeiten, dem Browser zu sagen, dass er Bilder verzögert laden soll.

### Das Lade-Attribut auf \<img>

Die einfachste Möglichkeit, dem Browser zu sagen, dass er Bilder verzögert laden soll, erfordert kein JavaScript. Sie fügen das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut zu einem {{HTMLElement("img")}}-Element mit dem Wert `lazy` hinzu, und der Browser weiß, dass er dieses Bild nur nach Bedarf laden soll.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Intersection Observer

Dies ist eine progressive Verbesserung des zuvor funktionierenden Beispiels — [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) wird Zielbilder nur dann laden, wenn der Benutzer nach unten scrollt und sie im Sichtbereich erscheinen.

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

Wenn das Objekt [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) unterstützt wird, erstellt die App eine neue Instanz davon. Die als Parameter übergebene Funktion behandelt den Fall, dass ein oder mehrere Elemente mit dem Beobachter schneiden (d.h. im Sichtbereich erscheinen). Wir können über jeden Fall iterieren und entsprechend reagieren — wenn ein Bild sichtbar ist, laden wir das richtige Bild und hören auf, es zu beobachten, da eine weitere Beobachtung nicht mehr erforderlich ist.

Erinnern wir uns an unser früheres Erwähnen der progressiven Verbesserung — der Code ist so geschrieben, dass die App funktioniert, unabhängig davon, ob Intersection Observer unterstützt wird oder nicht. Wenn dies nicht der Fall ist, laden wir die Bilder einfach mit dem im vorherigen Abschnitt beschriebenen einfacheren Ansatz.

## Verbesserungen

Denken Sie daran, dass es viele Möglichkeiten gibt, Ladezeiten zu optimieren, und dieses Beispiel beleuchtet nur einen der Ansätze. Sie könnten versuchen, Ihre Apps noch besser zu machen, indem Sie sie ohne JavaScript funktionsfähig machen — entweder indem Sie {{htmlelement("noscript")}} verwenden, um das Bild mit einem bereits zugewiesenen endgültigen `src` anzuzeigen, oder indem Sie `<img>`-Tags mit {{htmlelement("a")}}-Elementen umschließen, die auf die Zielbilder verweisen, sodass der Benutzer sie bei Bedarf anklicken und aufrufen kann.

Das werden wir nicht tun, da die App selbst von JavaScript abhängig ist — ohne JavaScript würde die Liste der Spiele nicht geladen werden, und der Service Worker-Code würde nicht ausgeführt werden.

Wir könnten den Ladeprozess umschreiben, um nicht nur die Bilder, sondern die kompletten Elemente mit vollständigen Beschreibungen und Links zu laden. Es würde wie ein endloser Bildlauf funktionieren — die Elemente der Liste erst dann laden, wenn der Benutzer auf der Seite nach unten scrollt. Auf diese Weise wäre die anfängliche HTML-Struktur minimal, die Ladezeit noch kürzer, und wir würden noch größere Leistungsvorteile erzielen.

## Fazit

Weniger Dateien, die anfänglich zu laden sind, kleinere Dateien, aufgeteilt in Module, Verwendung von Platzhaltern und das Laden von mehr Inhalten auf Abruf — dies wird dazu beitragen, schnellere Anfangsladezeiten zu erreichen, was Vorteile für den App-Ersteller bringt und dem Benutzer ein flüssigeres Erlebnis bietet.

Denken Sie an den Ansatz der progressiven Verbesserung — bieten Sie ein nutzbares Produkt, unabhängig vom Gerät oder der Plattform, aber stellen Sie sicher, dass Sie das Erlebnis für diejenigen anreichern, die moderne Browser verwenden.

## Abschließende Gedanken

Das war alles für diese Tutorial-Reihe — wir sind den [Quellcode der js13kPWA-Beispiel-App](https://github.com/mdn/pwa-examples/tree/main/js13kpwa) durchgegangen und haben die [PWA-Struktur](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), die [Offline-Verfügbarkeit mit Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [installierbare PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und schließlich [Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) kennengelernt.

In diesem Artikel haben wir das Konzept des progressiven Ladens untersucht, einschließlich eines interessanten Beispiels, das die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) verwendet.

Fühlen Sie sich frei, mit dem Code zu experimentieren, Ihre bestehende App mit PWA-Funktionen zu erweitern oder etwas völlig Neues auf eigene Faust zu entwickeln. PWAs bieten einen großen Vorteil gegenüber regulären Web-Apps.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
