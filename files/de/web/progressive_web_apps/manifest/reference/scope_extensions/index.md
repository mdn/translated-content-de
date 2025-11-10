---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{SeeCompatTable}}

Das `scope_extensions` Manifest-Element wird verwendet, um den Bereich einer Web-App auf andere Ursprünge zu erweitern. Dies ermöglicht es, mehrere Domains als eine einzige Web-App darzustellen.

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
  - : Ein Array von Objekten, das die folgenden Eigenschaften enthält:
    - `type`
      - : Ein String, der den Typ der Bereichserweiterung definiert. Derzeit ist dies immer `origin`, aber zukünftige Erweiterungen könnten andere Typen hinzufügen.
    - `origin`
      - : Ein String, der einen Ursprung repräsentiert, auf den die Web-App ihren Bereich erweitern möchte.

## Beschreibung

Das `scope_extensions` Manifest-Element kann den Bereich einer Web-App erweitern, um andere Ursprünge einzuschließen. Typische Anwendungsfälle sind:

- Verschiedene Subdomains für Inhalte oder Funktionen, zum Beispiel `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`.
- Verschiedene Subdomains für Sprache/Gebietsschema, zum Beispiel `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`.
- Verwandte unabhängige Domains, zum Beispiel `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`.

Die Haupt-Web-App (zum Beispiel, `https://example.com`) muss die Ursprünge, die sie in ihrem Bereich einschließen möchte, in ihrem `scope_extensions` Manifest-Element angeben:

```json
{
  "scope_extensions": [
    { "type": "origin", "origin": "https://example.jp" },
    { "type": "origin", "origin": "https://my-example.com" },
    { "type": "origin", "origin": "https://my-partner-site.com" },
    { "type": "origin", "origin": "https://example.slack.com" }
  ]
}
```

### Opt-in über eine .well-known Datei

Um in die Assoziation einzuwilligen, müssen die Sites, deren Ursprünge als im Bereich der `scope_extensions` der Web-App angegeben sind, eine [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) Datei namens `web-app-origin-association` unter einer relativen URL von `/.well-known/web-app-origin-association` enthalten. Diese muss eine JSON-Struktur enthalten, die eine oder mehrere Eigenschaften umfasst, deren Schlüssel gleich den [`id`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/id) Manifest-Elementen jeder Web-App sind, in deren Bereich die Site einwilligt.

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

Der Wert jeder Eigenschaft ist ein Objekt, das eine `scope`-Eigenschaft enthält, deren Wert den genauen Pfad angibt, der im Bereich der referenzierenden Web-App liegt.

> [!NOTE]
> Es ist nicht möglich, unterschiedliche Bereiche für dieselbe Web-App anzugeben – Sie können nicht mehrere Einträge für denselben Schlüssel einfügen.

### Auswirkung von `scope_extensions`

Sobald die in den `scope_extensions` der Web-App enthaltenen Ursprünge erfolgreich eingewilligt haben, können Sie dann zu Orten innerhalb des Bereichs dieser Ursprünge verlinken, und wenn die Links gefolgt werden, erscheinen die Orte im App-Fenster genauso wie Orte innerhalb des eigenen Bereichs der Web-App.

Wenn Sie einem Link zu einem Ort folgen, der nicht im Bereich der Web-App liegt, wird er wie erwartet als externer Ort angezeigt.

## Beispiele

Nehmen wir eine Beispiel-Web-App an, die sich unter `https://example.com/app` befindet:

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

Um in den Bereich der App einzuwilligen, müssten `https://example.co.uk` und `https://help.example.com` eine `/.well-known/web-app-origin-association` enthalten, die folgendermaßen aussieht:

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

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Element
