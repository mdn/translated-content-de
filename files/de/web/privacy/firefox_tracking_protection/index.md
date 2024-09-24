---
title: Firefox-Schutz vor Aktivitätenverfolgern
slug: Web/Privacy/Firefox_tracking_protection
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

## Was ist der Schutz vor Aktivitätenverfolgern?

Firefox Desktop und Firefox für Android beinhalten einen eingebauten Schutz vor Aktivitätenverfolgern. In privaten Fenstern (Tabs in Firefox für Android) blockiert Firefox Inhalte, die von Domains geladen werden, die Benutzer über Websites hinweg verfolgen (d.h. über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)).

Falls blockierte Inhalte Teil des Seitenlayouts sind, könnten Benutzer Layoutprobleme bemerken, wo Firefox diese Ladungen blockiert hat. Manchmal fällt es Benutzern überhaupt nicht auf, wenn das Gitter der Seite so funktioniert, dass andere Seitenelemente in die Lücken rutschen, die von blockierten Elementen hinterlassen werden.

Wenn Firefox Inhalte blockiert, protokolliert es eine Meldung in der Webkonsole wie diese:

```plain
The resource at "http://some/url" was blocked because tracking protection is enabled.
```

Bitte beachten Sie, dass Sie mit Firefox für Android die Konsolenausgabe über den Remote-Debugger aufrufen können.

![Seiteninformationen, die mögliche blockierte Inhalte anzeigen.](blocked_content.png)

Klicken Sie auf das ⓘ-Symbol in der Adressleiste, um Informationen über die derzeit geladene Seite anzuzeigen. Das erscheinende Popup benachrichtigt Sie, wenn Inhalte blockiert wurden. Sie können auch den Tracking-Schutz vollständig deaktivieren, wenn Sie dies wünschen, indem Sie auf die Tracking-Einstellungen zugreifen.

Wenn Tracking-Cookies vorhanden wären, könnten Sie die Liste anzeigen, indem Sie in dem obigen Bild auf "Blockieren von Tracking-Cookies" klicken, um das folgende Popup anzuzeigen:

![Seiteninformationen mit Cookies und Website-Daten.](tracking_cookies.png)

Sie können auf "Inhaltsblockierung verwalten" klicken, um die Blockierungseinstellungen zu ändern:

![Es gibt 3 Stufen der Inhaltsblockierung: Standard, Strikt oder Benutzerdefiniert, die immer aktiviert oder nur dann aktiviert werden können, wenn Firefox bekannte Tracker blockieren soll.](content_blocking.png)

## Wie entscheidet Firefox, was blockiert werden soll?

Inhalte werden basierend auf der Domain blockiert, von der sie geladen werden sollen.

Firefox wird mit einer Liste von Websites ausgeliefert, die identifiziert wurden, Benutzer über Websites hinweg zu verfolgen. Wenn der Schutz vor Aktivitätenverfolgern aktiviert ist, blockiert Firefox Inhalte von Websites in dieser Liste.

Websites, die Benutzer verfolgen, sind meistens Werbe- und Analytik-Drittanbieterseiten.

## Was bedeutet das für Ihre Website?

In erster Linie bedeutet es, dass, wenn der Schutz vor Aktivitätenverfolgern aktiviert ist:

- Inhalte, die von Drittanbieter-Trackern bereitgestellt werden, für Benutzer nicht sichtbar sind.
- Ihre Website keine Drittanbieter-Werbe- oder Analysedienste verwenden kann, die Tracking betreiben.

Etwas subtiler ist, dass, wenn andere Teile Ihrer Website darauf angewiesen sind, dass Tracker geladen werden, diese Teile ebenfalls nicht funktionieren, wenn der Schutz vor Aktivitätenverfolgern aktiviert ist. Wenn Ihre Website beispielsweise einen Rückruf enthält, der ausgeführt wird, wenn Inhalte von einer Tracking-Site geladen werden, wird der Rückruf nicht ausgeführt.

Zum Beispiel sollten Sie Google Analytics nicht auf folgende Weise verwenden:

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

Stattdessen sollten Sie den Fall berücksichtigen, in dem Google Analytics fehlt, indem Sie prüfen, ob das ga-Objekt initialisiert wurde:

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

Weitere Informationen zu dieser Technik finden Sie unter [Google Analytics, Privacy, and Event Tracking](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/).

> [!NOTE]
> Auf einen Drittanbieter in dieser Weise angewiesen zu sein, ist ohnehin keine gute Praxis, da Ihre Website dann beschädigt werden kann, wenn der Drittanbieter langsam oder nicht verfügbar ist oder wenn der Tracker durch ein Add-on blockiert wurde.

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
