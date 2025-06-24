---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

Das `scope_extensions` Manifestmitglied wird verwendet, um den Geltungsbereich einer Web-App zu erweitern, sodass andere Ursprünge eingeschlossen werden. Dadurch können mehrere Domains als eine einzige Web-App dargestellt werden.

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
      - : Ein String, der den Typ der Erweiterung des Geltungsbereichs definiert. Derzeit ist dies immer `origin`, aber zukünftige Erweiterungen könnten andere Typen hinzufügen.
    - `origin`
      - : Ein String, der einen Ursprung darstellt, den die Web-App in ihren Geltungsbereich aufnehmen möchte.

## Beschreibung

Das `scope_extensions` Manifestmitglied kann den Geltungsbereich einer Web-App erweitern, um andere Ursprünge einzuschließen. Typische Anwendungsfälle sind:

- Verschiedene Subdomains für Inhalte oder Funktionalitäten, beispielsweise `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`.
- Verschiedene Subdomains für Sprache/Region, beispielsweise `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`.
- Verwandte unabhängige Domains, beispielsweise `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`.

Die Haupt-Web-App (beispielsweise `https://example.com`) muss die Ursprünge, die sie in ihren Geltungsbereich einbeziehen möchte, in ihrem `scope_extensions` Manifestmitglied aufführen:

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://example.jp"},
  { "type": "origin", "origin": "https://my-example.com"},
  { "type": "origin", "origin": "https://my-partner-site.com"},
  { "type": "origin", "origin": "https://example.slack.com"}
]
```

### Opt-in über eine .well-known Datei

Um der Assoziation beizutreten, müssen die Seiten, deren Ursprünge im `scope_extensions` Manifestmitglied der Web-App als im Geltungsbereich angegeben sind, eine [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) Datei namens `web-app-origin-association` unter der relativen URL `/.well-known/web-app-origin-association` enthalten. Diese muss eine JSON-Struktur enthalten, die mindestens eine Eigenschaft umfasst, deren Schlüssel den [`id`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/id) Manifestmitgliedern derjenigen Web-Apps entspricht, deren Geltungsbereich die Seite einbeziehen möchte.

Beispiel:

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

Der Wert jeder Eigenschaft ist ein Objekt, das eine `scope`-Eigenschaft mit einem Wert enthält, der den genauen Pfad angibt, der im Geltungsbereich der verweisenden Web-App liegt.

> [!NOTE]
> Es ist nicht möglich, unterschiedliche Geltungsbereiche für dieselbe Web-App anzugeben — Sie können nicht mehrere Einträge für denselben Schlüssel einfügen.

### Wirkung von `scope_extensions`

Sobald die Ursprünge, die im `scope_extensions` der Web-App enthalten sind, erfolgreich beigetreten sind, können Sie zu Orten innerhalb des Geltungsbereichs dieser Ursprünge verlinken. Wenn die Links gefolgt werden, erscheinen die Orte im App-Fenster genauso wie Orte im eigenen Geltungsbereich der Web-App.

Wenn Sie einem Link zu einem Ort folgen, der nicht im Geltungsbereich der Web-App liegt, erscheint er als externer Ort, wie erwartet.

## Beispiele

Betrachten Sie eine Beispiel-Web-App unter `https://example.com/app`:

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

Um in den Geltungsbereich der App einzutreten, müssten `https://example.co.uk` und `https://help.example.com` eine `/.well-known/web-app-origin-association` enthalten, die folgendermaßen aussieht:

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

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifestmitglied
