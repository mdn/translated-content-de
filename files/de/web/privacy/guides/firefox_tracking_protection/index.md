---
title: Firefox Tracking-Schutz
slug: Web/Privacy/Guides/Firefox_tracking_protection
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

## Was ist Tracking-Schutz?

Firefox Desktop und Firefox für Android beinhalten einen integrierten Tracking-Schutz. In Fenstern des privaten Surfens (Tabs in Firefox für Android) blockiert Firefox Inhalte, die von Domains geladen werden, die Nutzer über verschiedene Websites hinweg verfolgen (z. B. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)).

Wenn blockierte Inhalte Teil des Seitenlayouts sind, können Nutzer Layout-Probleme bemerken, wo Firefox diese Ladeelemente blockiert hat. Manchmal bemerken Nutzer gar nichts, wenn das Seitenraster so funktioniert, dass andere Seitenelemente einspringen, um die durch blockierte Elemente hinterlassenen Lücken zu füllen.

Wenn Firefox Inhalte blockiert, protokolliert es eine Nachricht in der Webkonsole wie diese:

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

Beachten Sie, dass Sie mit Firefox für Android die Konsolenausgabe mit dem Remote-Debugger abrufen können.

![Seiteninformationen zeigen mögliche blockierte Inhalte.](blocked_content.png)

Klicken Sie auf das ⓘ-Symbol in der Adressleiste, um Informationen über die aktuell geladene Seite zu sehen. Das erscheinende Popup informiert Sie darüber, wenn Inhalte blockiert wurden. Sie können außerdem den Tracking-Schutz komplett deaktivieren, indem Sie auf die Tracking-Einstellungen zugreifen.

Wenn Tracking-Cookies vorhanden waren, können Sie die Liste anzeigen, indem Sie auf "Tracking-Cookies blockieren" im obigen Bild klicken, um das folgende Popup anzuzeigen:

![Seiteninformationen zeigen Cookies und Websitedaten.](tracking_cookies.png)

Sie können auf "Inhaltsblockierung verwalten" klicken, um die Blockierungseinstellungen zu ändern:

![Es gibt 3 Stufen der Inhaltsblockierung, standard, streng oder benutzerdefiniert, die auf immer an oder nur an, wenn Firefox bekannte Tracker blockiert, eingestellt werden können.](content_blocking.png)

## Wie entscheidet Firefox, was blockiert wird?

Inhalte werden basierend auf der Domain blockiert, von der sie geladen werden sollen.

Firefox wird mit einer Liste von Websites ausgeliefert, die als Cross-Site-Tracking von Nutzern identifiziert wurden. Wenn der Tracking-Schutz aktiviert ist, blockiert Firefox Inhalte von den gelisteten Websites.

Websites, die Nutzer verfolgen, sind meistens Drittanbieter-Werbe- und Analysetools.

## Was bedeutet das für Ihre Website?

Vorrangig bedeutet dies, dass bei aktiviertem Tracking-Schutz:

- Inhalte, die von Drittanbieter-Trackern bereitgestellt werden, für Nutzer nicht sichtbar sind.
- Ihre Website keine Drittanbieter-Werbe- oder Analysedienste nutzen kann, die Tracking betreiben.

Subtiler ist, dass, wenn andere Teile Ihrer Website von geladenen Trackern abhängen, diese Teile ebenfalls nicht funktionieren, wenn der Tracking-Schutz aktiviert ist. Beispielsweise, wenn Ihre Website einen Rückruf beinhaltet, der ausgeführt wird, wenn Inhalte von einer Tracking-Site geladen werden, wird der Rückruf nicht ausgeführt.

Zum Beispiel sollten Sie Google Analytics nicht folgendermaßen verwenden:

```html example-bad
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  Visit example.com
</a>

<script>
  function trackLink(url, event) {
    event.preventDefault();
    ga("send", "event", "outbound", "click", url, {
      transport: "beacon",
      hitCallback() {
        document.location = url;
      },
    });
  }
</script>
```

Stattdessen sollten Sie sicherstellen, dass Google Analytics fehlt, indem Sie überprüfen, ob das `ga`-Objekt initialisiert wurde:

```html example-good
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  Visit example.com
</a>

<script>
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
</script>
```

Weitere Informationen zu dieser Technik finden Sie unter [Google Analytics, Datenschutz und Ereignisverfolgung](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/).

> [!NOTE]
> Sich in dieser Weise auf einen Dritten zu verlassen, ist ohnehin keine gute Praxis, da Ihre Website beeinträchtigt werden kann, wenn der Dritte langsam oder nicht verfügbar ist oder wenn der Tracker durch ein Add-on blockiert wurde.
