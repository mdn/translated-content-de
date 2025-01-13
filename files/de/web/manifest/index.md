---
title: Web-App-Manifeste
slug: Web/Manifest
l10n:
  sourceCommit: bd74b053c1e3e395db091669476f0c04189a95c6
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Ein **Web-Anwendungsmanifest**, definiert in der [Web Application Manifest](https://w3c.github.io/manifest/)-Spezifikation, ist eine {{Glossary("JSON", "JSON")}}-Textdatei, die Informationen über eine Webanwendung bereitstellt.

Der häufigste Verwendungszweck für ein Web-Anwendungsmanifest besteht darin, dem Browser Informationen bereitzustellen, die zur Installation einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) auf einem Gerät benötigt werden, wie z. B. der Name und das Symbol der App.

Ein Web-Anwendungsmanifest enthält ein einzelnes JSON-Objekt, bei dem die obersten Schlüssel _Member_ genannt werden.

## Member

Dieser Abschnitt führt die Member auf, die im Manifest erscheinen können.

In der Spezifikation sind alle Member optional, aber einige Anwendungen erfordern das Vorhandensein bestimmter Member. Zum Beispiel [müssen PWAs bestimmte Manifest-Member bereitstellen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members).

{{ListSubpages("/de/docs/Web/Manifest")}}

> [!NOTE]
> Die `dir`, `lang` und `iarc_rating_id` Member sind nicht implementiert.

## Beispiel für ein Manifest

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

Die Erweiterung `.webmanifest` ist im Abschnitt [Medientyp-Registrierung](https://w3c.github.io/manifest/#media-type-registration) der Spezifikation angegeben (die Antwort der Manifestdatei sollte `Content-Type: application/manifest+json` zurückgeben). Browser unterstützen im Allgemeinen Manifeste mit anderen geeigneten Erweiterungen wie `.json` (`Content-Type: application/json`).

Wenn das Manifest Anmeldeinformationen zum Abrufen benötigt, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut auf `use-credentials` gesetzt werden, selbst wenn sich die Manifestdatei im gleichen Ursprung wie die aktuelle Seite befindet.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Startbildschirme

In einigen Browsern und Betriebssystemen wird beim Start einer installierten PWA ein Startbildschirm angezeigt. Dieser Startbildschirm wird automatisch generiert und sein Erscheinungsbild wird durch Member im Web-App-Manifest definiert, insbesondere:

- [`name`](/de/docs/Web/Manifest/name)
- [`background_color`](/de/docs/Web/Manifest/background_color)
- [`icons`](/de/docs/Web/Manifest/icons)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps)
