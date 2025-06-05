---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
l10n:
  sourceCommit: 6d946e09a5e42351abe0b66c8596e9649f1b51f3
---

Das `scope_extensions` Manifest-Mitglied wird verwendet, um den Geltungsbereich einer Web-App auf andere Ursprünge zu erweitern. Dadurch können mehrere Domains als eine einzelne Web-App präsentiert werden.

## Syntax

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

  - : Ein Array von Objekten, die die folgenden Eigenschaften enthalten:

    - `type`
      - : Ein String, der den Typ der Geltungsbereichserweiterung definiert. Dieser ist derzeit immer `origin`, aber zukünftige Erweiterungen könnten andere Typen hinzufügen.
    - `origin`
      - : Ein String, der einen Ursprung repräsentiert, auf den die Web-App ihren Geltungsbereich erweitern möchte.

## Beschreibung

Das `scope_extensions` Manifest-Mitglied kann den Geltungsbereich einer Web-App erweitern, um andere Ursprünge einzuschließen. Typische Anwendungsfälle umfassen:

- Verschiedene Subdomains für Inhalte oder Funktionen, zum Beispiel `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`.
- Verschiedene Subdomains für Sprache/Ort, zum Beispiel `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`.
- Verwandte unabhängige Domains, zum Beispiel `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`.

Die Haupt-Web-App (zum Beispiel, `https://example.com`) muss die Ursprünge, die sie in ihren Geltungsbereich aufnehmen möchte, in ihrem `scope_extensions` Manifest-Mitglied einschließen:

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://example.jp"},
  { "type": "origin", "origin": "https://my-example.com"},
  { "type": "origin", "origin": "https://my-partner-site.com"},
  { "type": "origin", "origin": "https://example.slack.com"}
]
```

### Opt-in über eine .well-known Datei

Um sich für die Assoziation anzumelden, müssen die Websites, deren Ursprünge als im Geltungsbereich der Web-App im `scope_extensions` Manifest-Mitglied angegeben sind, eine [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) Datei namens `web-app-origin-association` unter einer relativen URL von `/.well-known/web-app-origin-association` enthalten. Diese muss eine JSON-Struktur enthalten, die eine oder mehrere Eigenschaften umfasst, deren Schlüssel gleich den [`id`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/id) Manifest-Mitgliedern jeder Web-App sind, für deren Geltungsbereich sich die Website anmeldet.

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

Der Wert jeder Eigenschaft ist ein Objekt, das eine `scope` Eigenschaft mit einem Wert enthält, der den genauen Pfad angibt, der für die referenzierende Web-App im Geltungsbereich sein wird.

> [!NOTE]
> Es ist nicht möglich, unterschiedliche Geltungsbereiche für dieselbe Web-App anzugeben — Sie können für denselben Schlüssel keine mehrfachen Einträge aufnehmen.

### Effekt von `scope_extensions`

Sobald die im `scope_extensions` einer Web-App enthaltenen Ursprünge erfolgreich angemeldet sind, können Sie Standorte innerhalb des Geltungsbereichs dieser Ursprünge verlinken, und wenn diese Links gefolgt werden, erscheinen die Standorte im App-Fenster genauso wie Standorte innerhalb des eigenen Geltungsbereichs der Web-App.

Wenn Sie einem Link zu einem Standort folgen, der nicht im Geltungsbereich der Web-App liegt, wird er erwartungsgemäß als externer Standort angezeigt.

## Beispiele

Nehmen Sie eine Beispiel-Web-App unter `https://example.com/app`:

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

Um sich für den Geltungsbereich der App anzumelden, müssten `https://example.co.uk` und `https://help.example.com` eine `/.well-known/web-app-origin-association` enthalten, die so aussieht:

```json
{
  "https://example.com/app": {
    "scope": "/"
  }
}
```

> [!NOTE]
> Siehe [Scope Extensions API Demo](https://main-pwa-origin-2.glitch.me/) für ein funktionierendes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Mitglied
