---
title: Firefox-Tracking-Schutz
slug: Web/Privacy/Guides/Firefox_tracking_protection
l10n:
  sourceCommit: 0e638cb6498f7ae7dc1cb5c39fea99b00084c1e7
---

Diese Seite beschreibt, wie der eingebaute Tracking-Schutz von Firefox funktioniert und wie er das Laden von Inhalten von Drittanbietern beeinflusst. Das Verständnis darüber, wie der Tracking-Schutz funktioniert, hilft sicherzustellen, dass Ihre Website wie erwartet funktioniert, wenn Ihre Besucher ihn aktiviert haben.

## Was ist Tracking-Schutz?

Firefox Desktop und Firefox für Android beinhalten einen eingebauten Tracking-Schutz. In privaten Fenstern (Tabs in Firefox für Android) blockiert Firefox Inhalte, die von Domains geladen werden, die Benutzer über Websites hinweg verfolgen (d.h. über [Third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)).

Wenn blockierte Inhalte Teil des Seitenlayouts sind, können Benutzer Layoutprobleme bemerken, wo Firefox diese Ladevorgänge blockiert hat. Manchmal merken Benutzer es gar nicht, wenn das Seitengitter so funktioniert, dass andere Seitenelemente in die Löcher gleiten, die von blockierten Elementen hinterlassen wurden.

Wenn Firefox Inhalte blockiert, wird eine Nachricht in der Webkonsole protokolliert wie diese:

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

Beachten Sie, dass Sie mit Firefox für Android auf die Konsolenausgabe mit Hilfe des Remote-Debuggers zugreifen können.

![Seiteninformation, die mögliche blockierte Inhalte zeigt.](blocked_content.png)

Klicken Sie auf das ⓘ-Symbol in der Adressleiste, um Informationen über die aktuell geladene Seite anzuzeigen. Das erscheinende Popup benachrichtigt Sie, wenn Inhalte blockiert wurden. Sie können den Tracking-Schutz auch vollständig deaktivieren, wenn Sie dies wünschen, indem Sie auf die Tracking-Einstellungen zugreifen.

Wenn Tracking-Cookies vorhanden wären, könnten Sie die Liste anzeigen, indem Sie auf "Blocking Tracking Cookies" im obigen Bild klicken, um folgendes Popup anzuzeigen:

![Seiteninformation, die Cookies und Websitedaten zeigt.](tracking_cookies.png)

Sie können auf "Manage Content Blocking" klicken, um die Blockierungseinstellungen zu ändern:

![Es gibt 3 Ebenen der Inhaltsblockierung: Standard, Streng oder Benutzerdefiniert, die immer eingeschaltet oder nur dann eingeschaltet werden können, wenn Firefox so eingestellt ist, dass bekannte Tracker blockiert werden.](content_blocking.png)

## Wie entscheidet Firefox, was blockiert wird?

Inhalte werden basierend auf der Domain blockiert, von der sie geladen werden sollen.

Firefox wird mit einer Liste von Websites ausgeliefert, die als Überkreuz-Tracking von Benutzern identifiziert wurden. Wenn der Tracking-Schutz aktiviert ist, blockiert Firefox Inhalte von Websites auf dieser Liste.

Websites, die Benutzer verfolgen, sind meist Drittanbieter-Werbe- und Analyse-Seiten.

## Was bedeutet das für Ihre Website?

In erster Linie bedeutet es, dass, wenn der Tracking-Schutz aktiviert ist:

- Inhalte, die von Drittanbieter-Trackern bereitgestellt werden, für Benutzer nicht sichtbar sein werden.
- Ihre Website keine Drittanbieter-Werbe- oder Analysedienste nutzen kann, die sich mit Tracking beschäftigen.

Subtiler ist, dass wenn andere Teile Ihrer Website darauf angewiesen sind, dass Tracker geladen werden, diese Teile ebenfalls nicht funktionieren, wenn der Tracking-Schutz aktiviert ist. Zum Beispiel, wenn Ihre Website einen Callback enthält, der ausgeführt wird, wenn Inhalte von einer Tracking-Site geladen wurden, wird dieser Callback nicht ausgeführt.

Zum Beispiel sollten Sie Google Analytics nicht auf folgende Weise verwenden:

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

Stattdessen sollten Sie den Fall berücksichtigen, in dem Google Analytics fehlt, indem Sie prüfen, ob das `ga`-Objekt initialisiert wurde:

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
> Sich auf diese Weise auf einen Drittanbieter zu verlassen, ist ohnehin keine gute Praxis, da Ihre Seite dann gestört werden kann, wenn der Drittanbieter langsam oder nicht verfügbar ist oder wenn der Tracker durch ein Add-on blockiert wurde.
