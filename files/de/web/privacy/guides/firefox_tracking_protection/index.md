---
title: Firefox-Tracking-Schutz
slug: Web/Privacy/Guides/Firefox_tracking_protection
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

## Was ist Tracking-Schutz?

Firefox Desktop und Firefox für Android beinhalten einen eingebauten Tracking-Schutz. In privaten Fenstern (Tabs, in Firefox für Android) blockiert Firefox Inhalte, die von Domains geladen werden, die Benutzer über Websites hinweg verfolgen (z. B. durch [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)).

Wenn blockierte Inhalte Teil des Seitenlayouts sind, können Benutzer Layoutprobleme bemerken, wo Firefox diese Ladevorgänge blockiert hat. Manchmal bemerken Benutzer überhaupt nichts, wenn das Seitenraster so funktioniert, dass andere Seitenelemente in die von blockierten Elementen hinterlassenen Lücken rutschen.

Wenn Firefox Inhalte blockiert, wird eine Nachricht in die Web-Konsole geloggt wie diese:

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

Beachten Sie, dass Sie mit Firefox für Android auf die Konsolenausgabe über den Remote-Debugger zugreifen können.

![Seiteninformation zeigt mögliche blockierte Inhalte.](blocked_content.png)

Klicken Sie auf das ⓘ-Symbol in der Adressleiste, um Informationen über die aktuell geladene Seite anzuzeigen. Das erscheinende Popup benachrichtigt Sie, wenn Inhalte blockiert wurden. Sie können auch den Tracking-Schutz vollständig deaktivieren, indem Sie auf die Trackingeinstellungen zugreifen.

Wenn Tracking-Cookies vorhanden waren, könnten Sie die Liste anzeigen, indem Sie im obigen Bild auf "Blocking Tracking Cookies" klicken, um das folgende Popup anzuzeigen:

![Seiteninformation zeigt Cookies und Situsdaten.](tracking_cookies.png)

Sie können auf "Inhaltsblockierung verwalten" klicken, um die Blockierungseinstellungen zu ändern:

![Es gibt 3 Ebenen der Inhaltsblockierung, Standard, Strikt oder Benutzerdefiniert, die immer aktiv sein oder nur aktiv sein können, wenn Firefox eingestellt ist, bekannte Tracker zu blockieren.](content_blocking.png)

## Wie entscheidet Firefox, was blockiert wird?

Inhalte werden basierend auf der Domain blockiert, von der sie geladen werden sollen.

Firefox wird mit einer Liste von Websites geliefert, die als Nutzer über Websites hinweg verfolgend identifiziert wurden. Wenn der Tracking-Schutz aktiviert ist, blockiert Firefox Inhalte von Websites in dieser Liste.

Websites, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analysewebsites.

## Was bedeutet das für Ihre Website?

In erster Linie bedeutet es, dass bei aktiviertem Tracking-Schutz:

- Inhalte, die von Drittanbieter-Trackern bereitgestellt werden, für Benutzer nicht sichtbar sind.
- Ihre Seite keine Drittanbieter-Werbe- oder Analysedienste nutzen kann, die Tracking betreiben.

Subtiler ist, dass andere Teile Ihrer Seite, die davon abhängen, dass Tracker geladen werden, ebenfalls nicht funktionieren, wenn der Tracking-Schutz aktiviert ist. Beispielsweise, wenn Ihre Seite einen Callback enthält, der ausgeführt wird, wenn Inhalte von einer Tracking-Site geladen werden, wird der Callback nicht ausgeführt.

Sie sollten Google Analytics beispielsweise nicht auf folgende Weise verwenden:

```js example-bad
function trackLink(url, event) {
  event.preventDefault();
  ga("send", "event", "outbound", "click", url, {
    transport: "beacon",
    hitCallback() {
      document.location = url;
    },
  });
}

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    trackLink(link.href, event);
  });
});
```

Stattdessen sollten Sie den Fall berücksichtigen, wenn Google Analytics fehlt, indem Sie überprüfen, ob das `ga`-Objekt initialisiert wurde:

```js example-good
function trackLink(url, event) {
  event.preventDefault();
  if (window.ga && ga.loaded) {
    ga("send", "event", "outbound", "click", url, {
      transport: "beacon",
      hitCallback() {
        document.location = url;
      },
    });
  } else {
    document.location = url;
  }
}

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    trackLink(link.href, event);
  });
});
```

Weitere Informationen zu dieser Technik finden Sie unter [Google Analytics, Privacy, and Event Tracking](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/).

> [!NOTE]
> Sich auf einen Drittanbieter in dieser Weise zu verlassen, ist ohnehin keine gute Praxis, da Ihre Seite dann kaputtgehen kann, wenn der Drittanbieter langsam oder nicht verfügbar ist, oder wenn der Tracker durch ein Add-on blockiert wurde.
