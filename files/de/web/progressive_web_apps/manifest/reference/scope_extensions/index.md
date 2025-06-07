---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
l10n:
  sourceCommit: 7cd2415e24a105ad4a457bb8eba32b0146dea211
---

{{SeeCompatTable}}

Der `scope_extensions` Manifestmitglied wird verwendet, um den Umfang einer Webanwendung auf andere Ursprünge zu erweitern. Dies ermöglicht es, mehrere Domains als eine einzige Webanwendung darzustellen.

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
      - : Ein String, der den Typ der Umfangserweiterung definiert. Derzeit ist dies immer `origin`, aber zukünftige Erweiterungen könnten andere Typen hinzufügen.
    - `origin`
      - : Ein String, der einen Ursprung repräsentiert, den die Webanwendung in ihren Umfang einbeziehen möchte.

## Beschreibung

Der `scope_extensions` Manifestmitglied kann den Umfang einer Webanwendung erweitern, um andere Ursprünge einzuschließen. Typische Anwendungsfälle sind:

- Verschiedene Subdomains für Inhalte oder Funktionalitäten, zum Beispiel `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`.
- Verschiedene Subdomains für Sprache/Locale, zum Beispiel `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`.
- Verwandte unabhängige Domains, zum Beispiel `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`.

Die Haupt-Webanwendung (zum Beispiel, `https://example.com`) muss die Ursprünge, die sie in ihren Umfang aufnehmen möchte, in ihrem `scope_extensions` Manifestmitglied einbeziehen:

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://example.jp"},
  { "type": "origin", "origin": "https://my-example.com"},
  { "type": "origin", "origin": "https://my-partner-site.com"},
  { "type": "origin", "origin": "https://example.slack.com"}
]
```

### Opt-in über eine .well-known Datei

Um sich für die Assoziation anzumelden, müssen die Websites, deren Ursprünge im `scope_extensions` Manifestmitglied der Webanwendung als in-Scope angegeben sind, eine [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) Datei namens `web-app-origin-association` unter einer relativen URL von `/.well-known/web-app-origin-association` enthalten. Diese muss eine JSON-Struktur enthalten, die eine oder mehrere Eigenschaften enthält, deren Schlüssel den [`id`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/id) Manifest-Mitgliedern jeder Webanwendung entsprechen, in deren Umfang die Website aufgenommen werden soll.

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

Der Wert jeder Eigenschaft ist ein Objekt, das eine `scope` Eigenschaft enthält, mit einem Wert, der den genauen Pfad angibt, der im Umfang der referenzierenden Webanwendung liegen wird.

> [!NOTE]
> Es ist nicht möglich, verschiedene Umfänge für dieselbe Webanwendung anzugeben — Sie können nicht mehrere Einträge für denselben Schlüssel einbeziehen.

### Effekt von `scope_extensions`

Sobald die in der `scope_extensions` der Webanwendung enthaltenen Ursprünge erfolgreich angemeldet sind, können Sie dann zu Orten innerhalb des Umfangs dieser Ursprünge verlinken, und wenn die Links gefolgt werden, erscheinen die Orte im App-Fenster genauso wie Orte innerhalb des eigenen Umfangs der Webanwendung.

Wenn Sie einem Link zu einem Ort folgen, der nicht im Umfang der Webanwendung liegt, wird er wie erwartet als externer Ort angezeigt.

## Beispiele

Nehmen Sie eine Beispiel-Webanwendung unter `https://example.com/app`:

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

Um sich in den Umfang der App einzuschreiben, müssten `https://example.co.uk` und `https://help.example.com` einen `/.well-known/web-app-origin-association` enthalten, der folgendermaßen aussieht:

```json
{
  "https://example.com/app": {
    "scope": "/"
  }
}
```

> [!NOTE]
> Sehen Sie sich die [Scope Extensions API Demo](https://main-pwa-origin-2.glitch.me/) für ein funktionierendes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifestmitglied
