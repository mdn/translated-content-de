---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
l10n:
  sourceCommit: 4fbd5588f62ee052c1ad1b699f416b628f2c5909
---

Das `scope_extensions` Manifestmitglied wird verwendet, um den Geltungsbereich einer Web-App zu erweitern und weitere Ursprünge einzubeziehen. Dies ermöglicht es, mehrere Domains als eine einzelne Web-App darzustellen.

## Syntax

Array von Zeichenketten:

```json
"scope_extensions": [
  "https://support.example.com",
  "https://shop.example.com",
  "https://example.de",
  "https://example.co.uk"
]
```

Array von Objekten:

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://support.example.com"},
  { "type": "origin", "origin": "https://shop.example.com"},
  { "type": "origin", "origin": "https://example.de"},
  { "type": "origin", "origin": "https://example.co.uk"}
]
```

### Werte

- `scope_extensions`

  - : Ein Array von Zeichenketten oder ein Array von Objekten, die jeweils eine `type`-Eigenschaft und eine `origin`-Eigenschaft enthalten.

    - Im Array von Zeichenketten repräsentiert jede Zeichenkette einen Ursprung, den die Web-App in ihren Geltungsbereich aufnehmen möchte.
    - Im Array von Objekten ist der Wert von `type` immer `origin`, was einen Ursprungseintrag angibt, und der Wert von `origin` ist eine Zeichenkette, die einen Ursprung repräsentiert, den die Web-App in ihren Geltungsbereich aufnehmen möchte.

    Das Array-Format kann als Kurzform des Objektformats betrachtet werden; die Objektversion ermöglicht zukünftige Erweiterungen durch das Hinzufügen anderer Felder als `origin`.

## Beschreibung

Das `scope_extensions` Manifestmitglied kann den Geltungsbereich einer Web-App erweitern, um weitere Ursprünge einzubeziehen. Typische Anwendungsfälle umfassen:

- Verschiedene Subdomains für Inhalte oder Funktionalität, wie zum Beispiel `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`.
- Verschiedene Subdomains für Sprache/Locale, wie zum Beispiel `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`.
- Verwandte unabhängige Domains, wie zum Beispiel `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`.

Die Haupt-Web-App (zum Beispiel `https://example.com`) muss die Ursprünge, die sie in ihren Geltungsbereich aufnehmen möchte, in ihrem `scope_extensions` Manifestmitglied einbeziehen:

```json
"scope_extensions": [
  "https://example.jp",
  "https://my-example.com",
  "https://my-partner-site.com",
  "https://example.slack.com"
]
```

### Opt-in über eine .well-known Datei

Um der Zuordnung zuzustimmen, müssen die Seiten, deren Ursprünge im `scope_extensions` Manifestmitglied der Web-App als im Geltungsbereich angegeben sind, eine [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) Datei namens `web-app-origin-association` unter einer relativen URL von `/.well-known/web-app-origin-association` enthalten. Diese muss eine JSON-Struktur enthalten, die eine oder mehrere Eigenschaften enthält, deren Schlüssel den [`id`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/id) Manifestmitgliedern jeder Web-App entspricht, in deren Geltungsbereich die Seite aufgenommen wird.

Zum Beispiel:

```json
{
  "https://example.com": {
    "scope": "/"
  },
  "https://beta.example.com": {
    "scope": "/"
  }
}
```

Der Wert jeder Eigenschaft ist ein Objekt, das eine `scope`-Eigenschaft mit einem Wert enthält, der den genauen Pfad spezifiziert, der für die referenzierende Web-App im Geltungsbereich sein wird.

> [!NOTE]
> Es ist nicht möglich, unterschiedliche Geltungsbereiche für die gleiche Web-App anzugeben — Sie können nicht mehrere Einträge für denselben Schlüssel enthalten.

### Wirkung von `scope_extensions`

Sobald die Ursprünge, die in `scope_extensions` der Web-App enthalten sind, erfolgreich einbezogen wurden, können Sie dann Links zu Standorten innerhalb des Geltungsbereichs dieser Ursprünge erstellen. Wenn die Links gefolgt werden, erscheinen die Standorte im App-Fenster auf die gleiche Weise wie Standorte innerhalb des eigenen Geltungsbereichs der Web-App.

Wenn Sie einem Link zu einem Standort folgen, der nicht im Geltungsbereich der Web-App liegt, erscheint er als externer Standort, wie erwartet.

## Beispiele

Nehmen Sie eine Beispiel-Web-App an, die sich unter `https://example.com/app` befindet:

```json
{
  "id": "https://example.com/app",
  "name": "My App",
  "icons": [
    {
      "src": "icon/hd_hi",
      "sizes": "128x128"
    }
  ],
  "start_url": "/app/index.html",
  "scope": "/app",
  "display": "standalone",
  "scope_extensions": [
    { "type": "origin", "origin": "https://example.co.uk" },
    { "type": "origin", "origin": "https://help.example.com" }
  ]
}
```

Um in den Geltungsbereich der App einbezogen zu werden, müssten `https://example.co.uk` und `https://help.example.com` eine `/.well-known/web-app-origin-association` enthalten, die folgendermaßen aussieht:

```json
{
  "https://example.com/app": {
    "scope": "/"
  }
}
```

> [!NOTE]
> Sehen Sie sich [Scope Extensions API Demo](https://main-pwa-origin-2.glitch.me/) für ein funktionierendes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifestmitglied
