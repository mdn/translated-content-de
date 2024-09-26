---
title: Web-App-Manifeste
slug: Web/Manifest
l10n:
  sourceCommit: a295e56b0f0f2d05dd7775bf85881e73dec898da
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Ein **Webanwendungsmanifest**, definiert in der [Web Application Manifest](https://w3c.github.io/manifest/)-Spezifikation, ist eine {{Glossary("JSON")}}-Textdatei, die Informationen über eine Webanwendung bereitstellt.

Die häufigste Verwendung für ein Webanwendungsmanifest ist es, dem Browser die Informationen bereitzustellen, die zum Installieren einer [progressiven Web-App](/de/docs/Web/Progressive_web_apps) (PWA) auf einem Gerät benötigt werden, wie z.B. der Name und das Symbol der App.

Ein Webanwendungsmanifest enthält ein einzelnes JSON-Objekt, bei dem die obersten Schlüssel als _Mitglieder_ bezeichnet werden.

## Mitglieder

Dieser Abschnitt listet die Mitglieder auf, die im Manifest erscheinen können.

Alle Mitglieder sind in der Spezifikation optional, aber einige Anwendungen erfordern das Vorhandensein bestimmter Mitglieder. Zum Beispiel müssen [PWAs bestimmte Manifestmitglieder bereitstellen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members).

{{ListSubpages("/de/docs/Web/Manifest")}}

> [!NOTE]
> Die Mitglieder `dir`, `lang`, `iarc_rating_id` und `note_taking` sind nicht implementiert.

## Beispielmanifest

```json
{
  "short_name": "MDN",
  "name": "MDN Web Docs",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

## Bereitstellung eines Manifests

Web-App-Manifeste werden in Ihren HTML-Seiten mithilfe eines {{HTMLElement("link")}}-Elements im {{HTMLElement("head")}} eines Dokuments bereitgestellt:

```html
<link rel="manifest" href="manifest.json" />
```

Die `.webmanifest`-Erweiterung ist im Abschnitt [Media type registration](https://w3c.github.io/manifest/#media-type-registration) der Spezifikation angegeben (die Antwort der Manifestdatei sollte `Content-Type: application/manifest+json` zurückgeben). Browser unterstützen im Allgemeinen Manifeste mit anderen geeigneten Erweiterungen wie `.json` (`Content-Type: application/json`).

Wenn das Manifest Anmeldeinformationen zum Abrufen erfordert, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut auf `use-credentials` gesetzt werden, selbst wenn sich die Manifestdatei im gleichen Ursprung wie die aktuelle Seite befindet.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Startbildschirme

In einigen Browsern und Betriebssystemen wird ein Startbildschirm angezeigt, wenn eine installierte PWA gestartet wird. Dieser Startbildschirm wird automatisch generiert und sein Erscheinungsbild wird durch Mitglieder im Web-App-Manifest definiert, insbesondere:

- [`name`](/de/docs/Web/Manifest/name)
- [`background_color`](/de/docs/Web/Manifest/background_color)
- [`icons`](/de/docs/Web/Manifest/icons)

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps)