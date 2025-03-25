---
title: id
slug: Web/Progressive_web_apps/Manifest/Reference/id
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `id`-Manifestmitglied wird verwendet, um einen eindeutigen Bezeichner für Ihre Webanwendung festzulegen.

## Syntax

```json-nolint
/* Absolute URL */
"id": "https://example.com/myapp"

/* Relative URL */
"id": "myapp/v2"

/* URL with query parameters */
"id": "myapp?version=2&mode=trial"
```

### Werte

- `id`
  - : Ein Zeichenkette, die die Form einer URL annimmt.
    Die URL muss die gleiche Herkunft wie die [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Ihrer Webanwendung haben.
    Wenn `id` eine relative URL ist, wird sie unter Verwendung der Herkunft von `start_url` aufgelöst. Jedes Fragment in der `id` wird immer ignoriert.
    Wenn `id` nicht angegeben ist oder der Wert in irgendeiner Weise ungültig ist (z. B. keine Zeichenkette, keine gültige URL, nicht die gleiche Herkunft wie `start_url`), wird der Wert von `start_url` verwendet.

## Beschreibung

Das `id`-Manifestmitglied dient als eindeutiger Bezeichner für Ihre Webanwendung. Es ermöglicht Browsern, zwischen verschiedenen Anwendungen zu unterscheiden:

- Wenn ein Browser auf ein App-Manifest mit einer `id` stößt, die nicht einer bereits installierten Anwendung entspricht, behandelt er dieses Manifest als Beschreibung einer eigenständigen Anwendung, selbst wenn sie von derselben URL wie eine andere Anwendung bereitgestellt wird.
- Wenn ein Browser auf ein App-Manifest mit einer `id` stößt, die mit der Identität einer bereits installierten App übereinstimmt, behandelt er das neue Manifest als Ersatz für das bestehende Manifest der App, selbst wenn die App von einer anderen URL als der zuvor installierten bereitgestellt wird.

> [!NOTE]
> Obwohl die `id` wie eine URL verarbeitet wird, verweist sie nicht auf eine Ressource, die zugänglich ist, daher muss sie sich nicht im [Geltungsbereich](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) der App befinden.

Die `id` kann auch von Diensten verwendet werden, die Listen von Webanwendungen sammeln, um Anwendungen eindeutig zu identifizieren.

Einige wichtige Punkte, die beim Verwenden des `id`-Mitglieds zu beachten sind:

- Verwenden Sie ein führendes `/`, um anzugeben, dass die `id` ein URL-Pfad relativ zur Wurzel ist.
- Da `id` gegen die Herkunft der `start_url` aufgelöst wird, werden `id`-Werte wie `../foo`, `foo`, `/foo`, und `./foo` alle relativ zur Herkunft auf denselben Bezeichner aufgelöst. Wenn zum Beispiel `start_url` `https://example.com/app/` ist, werden all diese `id`-Werte zu `https://example.com/foo/` aufgelöst.
- Standard-URL-Codierungs- und -Dekodierungsregeln gelten beim Auflösen des `id`-Wertes.
- Fragmente in der `id` werden während der Verarbeitung entfernt. Zum Beispiel, wenn `id` auf `foo#bar` gesetzt ist, wird es als `foo` aufgelöst. Ebenso, wenn `id` nicht definiert ist und die `start_url` `https://example.com/app/#home` ist, wird `id` zu `https://example.com/app/` aufgelöst.
- Abfrageparameter in der `id` bleiben erhalten und werden in den endgültig aufgelösten Bezeichner einbezogen.

## Beispiele

### Erstellen einer eigenständigen App-Version

Angenommen, Sie erstellen eine Webanwendung mit dem folgenden Manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

Wenn Sie später eine andere Version dieser App mit wesentlichen Änderungen erstellen und möchten, dass sie als eigenständige App behandelt wird, können Sie das Manifest folgendermaßen hinzufügen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In diesem Fall, obwohl beide Manifestdateien von derselben URL bereitgestellt werden, behandeln Browser das neue Manifest als Beschreibung einer eigenständigen Anwendung, da die `id` unterschiedlich ist. Daher können Benutzer beide Versionen gleichzeitig installiert haben.

### Aktualisieren einer bestehenden App

Betrachten Sie ein Szenario, in dem Sie eine Webanwendung mit dem folgenden Manifest bereitstellen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://old-domain.com/app"
}
```

Entscheiden Sie sich jedoch später, die App auf eine andere Domäne zu verschieben, würden Sie das Manifest wie folgt aktualisieren:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://new-domain.com/app"
}
```

Browser behandeln dieses neue Manifest als ein Update der bestehenden App, da die `id`-Werte übereinstimmen. In diesem Fall erhalten Benutzer ein Update ihrer bestehenden App, anstatt aufgefordert zu werden, eine neue App zu installieren.

### Verständnis der `id`-Auflösung

Angenommen, die `start_url` für Ihre App ist `https://example.com/my-app/home`. Die folgende Tabelle zeigt, wie verschiedene `id`-Werte im Manifest aufgelöst werden:

| `id` im Manifest              | Aufgelöste `id`                    | Erklärung                                                                                        |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| nicht definiert               | `https://example.com/my-app/home`  | Standardmäßig `start_url`                                                                        |
| `""`                          | `https://example.com/my-app/home`  | Leere Zeichenkette wird zu `start_url`                                                           |
| `/`                           | `https://example.com/`             | URL relativ zur Wurzel                                                                           |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relativer Pfad, aufgelöst gegen die Herkunft von `start_url` mit beibehaltenen Abfrageparametern |
| `foo#heading`                 | `https://example.com/foo`          | Relativer Pfad, aufgelöst gegen die Herkunft von `start_url` mit entferntem Fragment             |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Ursprungsübergreifende URL nicht erlaubt, fällt auf `start_url` zurück                           |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Nicht-ASCII-Zeichen im URL kodiert                                                               |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifestmitglied
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifestmitglied
