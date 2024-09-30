---
title: id
slug: Web/Manifest/id
l10n:
  sourceCommit: b2ebcfe7ff6668749a383493ac347076f0bad3dd
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `id`-Manifestmitglied wird verwendet, um eine eindeutige Kennung für Ihre Webanwendung anzugeben.

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
  - : Ein String, der die Form einer URL annimmt.
    Die URL muss die gleiche Herkunft wie die [`start_url`](/de/docs/Web/Manifest/start_url) Ihrer Web-App haben.
    Wenn `id` eine relative URL ist, wird sie unter Verwendung der Herkunft von `start_url` aufgelöst. Jedes Fragment in der `id` wird immer ignoriert.
    Wenn `id` nicht festgelegt ist oder der Wert in irgendeiner Weise ungültig ist (z. B. kein String, keine gültige URL, nicht dieselbe Herkunft wie `start_url`), wird der Wert von `start_url` verwendet.

## Beschreibung

Das `id`-Manifestmitglied dient als eindeutige Kennung für Ihre Web-App. Es ermöglicht Browsern, zwischen verschiedenen Anwendungen zu unterscheiden:

- Wenn ein Browser auf ein App-Manifest mit einer `id` stößt, die keiner bereits installierten Anwendung entspricht, behandelt er dieses Manifest als Beschreibung einer eigenen Anwendung, auch wenn es von derselben URL wie eine andere Anwendung bereitgestellt wird.
- Wenn ein Browser auf ein App-Manifest mit einer `id` stößt, die mit der Identität einer bereits installierten App übereinstimmt, behandelt er das neue Manifest als Ersatz für das vorhandene App-Manifest, selbst wenn die App von einer anderen URL als der zuvor installierten bereitgestellt wird.

> [!NOTE]
> Obwohl die `id` wie eine URL verarbeitet wird, verweist sie nicht auf eine Ressource, die aufgerufen werden kann, sodass sie nicht innerhalb des [scope](/de/docs/Web/Manifest/scope) der App liegen muss.

Die `id` kann auch von Diensten verwendet werden, die Listen von Web-Apps sammeln, um Anwendungen eindeutig zu identifizieren.

Einige wichtige Punkte, die Sie bei der Verwendung des `id`-Mitglieds beachten sollten:

- Verwenden Sie ein führendes `/`, um anzugeben, dass die `id` ein root-relativer URL-Pfad ist.
- Da `id` gegen den Ursprung von `start_url` aufgelöst wird, werden `id`-Werte wie `../foo`, `foo`, `/foo` und `./foo` alle relativ zum Ursprung zum gleichen Bezeichner aufgelöst. Zum Beispiel: Wenn `start_url` `https://example.com/app/` ist, werden alle diese `id`-Werte zu `https://example.com/foo/` aufgelöst.
- Standard-URL-Kodierungs- und Dekodierungsregeln gelten beim Auflösen des `id`-Wertes.
- Fragmente in der `id` werden während der Verarbeitung entfernt. Zum Beispiel: Wenn `id` auf `foo#bar` gesetzt ist, wird es als `foo` aufgelöst. Ebenso: Wenn `id` undefiniert ist und die `start_url` `https://example.com/app/#home` ist, wird `id` zu `https://example.com/app/` aufgelöst.
- Abfrageparameter in der `id` werden beibehalten und in den endgültigen aufgelösten Bezeichner aufgenommen.

## Beispiele

### Erstellen einer eigenen App-Version

Angenommen, Sie erstellen eine Web-App mit dem folgenden Manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

Wenn Sie später eine andere Version dieser App mit wesentlichen Änderungen erstellen und möchten, dass sie als eigene App behandelt wird, können Sie das Manifest wie folgt hinzufügen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In diesem Fall, auch wenn beide Manifestdateien von derselben URL bereitgestellt werden, behandeln Browser das neue Manifest als Beschreibung einer eigenen Anwendung, da die `id` unterschiedlich ist. Daher können Benutzer beide Versionen gleichzeitig installiert haben.

### Aktualisieren einer vorhandenen App

Betrachten Sie ein Szenario, in dem Sie eine Web-App mit dem folgenden Manifest bereitstellen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://old-domain.com/app"
}
```

Wenn Sie die App später auf eine andere Domain verschieben, würden Sie das Manifest wie folgt aktualisieren:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://new-domain.com/app"
}
```

Browser behandeln dieses neue Manifest als ein Update der vorhandenen App, da die `id`-Werte übereinstimmen. In diesem Fall erhalten die Benutzer ein Update ihrer vorhandenen App, anstatt zum Installieren einer neuen App aufgefordert zu werden.

### Verständnis der `id`-Auflösung

Angenommen, die `start_url` Ihrer App ist `https://example.com/my-app/home`. Die folgende Tabelle zeigt, wie verschiedene `id`-Werte im Manifest aufgelöst werden:

| `id` im Manifest              | Aufgelöste `id`                     | Erklärung                                                                           |
| ----------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------- |
| undefined                     | `https://example.com/my-app/home`  | Standardmäßig `start_url`                                                           |
| `""`                          | `https://example.com/my-app/home`  | Leerer String wird zu `start_url`                                                   |
| `/`                           | `https://example.com/`             | Root-relative URL                                                                   |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relativer Pfad, aufgelöst gegenüber der Herkunft von `start_url`, mit erhaltenen Abfrageparametern |
| `foo#heading`                 | `https://example.com/foo`          | Relativer Pfad, aufgelöst gegenüber der Herkunft von `start_url`, mit entferntem Fragment |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Cross-origin URL nicht erlaubt, fällt zurück auf `start_url`                        |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Nicht-ASCII-Zeichen in URL kodiert                                                  |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Manifest/scope) Manifestmitglied
- [`start_url`](/de/docs/Web/Manifest/start_url) Manifestmitglied
