---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{SeeCompatTable}}

Das `scope_extensions` Manifest-Mitglied wird verwendet, um den Bereich einer Web-App auf andere Ursprünge zu erweitern. Dadurch können mehrere Domains als eine einzelne Web-App präsentiert werden.

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
  - : Ein Array von Objekten, die jeweils die folgenden Eigenschaften enthalten:
    - `type`
      - : Ein String, der den Typ der Bereichserweiterung definiert. Derzeit ist dies immer `origin`, aber zukünftige Erweiterungen können andere Typen hinzufügen.
    - `origin`
      - : Ein String, der einen Ursprung repräsentiert, den die Web-App in ihren Bereich einbeziehen möchte.

## Beschreibung

Das `scope_extensions` Manifest-Mitglied kann den Bereich einer Web-App erweitern, um andere Ursprünge einzubeziehen. Typische Anwendungsfälle sind:

- Verschiedene Subdomains für Inhalte oder Funktionalitäten, zum Beispiel `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`.
- Verschiedene Subdomains für Sprache/Lokalisation, zum Beispiel `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`.
- Verwandte unabhängige Domains, zum Beispiel `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`.

Die Haupt-Web-App (zum Beispiel `https://example.com`) muss die Ursprünge, die sie einbeziehen möchte, in ihrem `scope_extensions` Manifest-Mitglied angeben:

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://example.jp"},
  { "type": "origin", "origin": "https://my-example.com"},
  { "type": "origin", "origin": "https://my-partner-site.com"},
  { "type": "origin", "origin": "https://example.slack.com"}
]
```

### Opt-in über eine .well-known Datei

Um sich für die Assoziation anzumelden, müssen die Seiten, deren Ursprünge im `scope_extensions` Manifest-Mitglied der Web-App als im Bereich liegend angegeben sind, eine [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) Datei namens `web-app-origin-association` unter einer relativen URL von `/.well-known/web-app-origin-association` enthalten. Diese muss eine JSON-Struktur enthalten, die eine oder mehrere Eigenschaften umfasst, deren Schlüssel den [`id`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/id) Manifest-Mitgliedern jeder Web-App, in deren Bereich sich die Seite einloggen möchte, entsprechen.

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

Der Wert jeder Eigenschaft ist ein Objekt, das eine `scope` Eigenschaft enthält, mit einem Wert, der den genau im Bereich liegenden Pfad für die referenzierende Web-App angibt.

> [!NOTE]
> Es ist nicht möglich, verschiedene Bereiche für dieselbe Web-App anzugeben — Sie können nicht mehrere Einträge für denselben Schlüssel aufnehmen.

### Wirkung von `scope_extensions`

Sobald die Ursprünge, die in den `scope_extensions` der Web-App enthalten sind, erfolgreich angemeldet sind, können Sie Links zu Orten innerhalb des Bereichs dieser Ursprünge herstellen, und wenn die Links verfolgt werden, erscheinen die Orte im App-Fenster, so wie Orte innerhalb des eigenen Bereichs der Web-App.

Wenn Sie einem Link zu einem Ort folgen, der nicht im Bereich der Web-App liegt, wird er als externer Ort angezeigt, wie erwartet.

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

Um sich in den Bereich der App einzuloggen, müssten `https://example.co.uk` und `https://help.example.com` eine `/.well-known/web-app-origin-association` enthalten, die so aussieht:

```json
{
  "https://example.com/app": {
    "scope": "/"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Mitglied
