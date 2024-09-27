---
title: id
slug: Web/Manifest/id
l10n:
  sourceCommit: b2ebcfe7ff6668749a383493ac347076f0bad3dd
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `id`-Manifestmitglied wird verwendet, um eine eindeutige Kennung für Ihre Webanwendung festzulegen.

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
  - : Ein String in Form einer URL.
    Die URL muss dasselbe Ursprung wie die [`start_url`](/de/docs/Web/Manifest/start_url) Ihrer Web-App haben.
    Wenn `id` eine relative URL ist, wird sie mithilfe des Ursprungs von `start_url` aufgelöst. Jegliche Fragmente im `id` werden immer ignoriert.
    Wenn `id` nicht angegeben ist oder der Wert in irgendeiner Weise ungültig ist (wie z.B. kein String, keine gültige URL, nicht gleich Ursprung mit `start_url`), wird der Wert von `start_url` verwendet.

## Beschreibung

Das `id`-Manifestmitglied dient als eindeutige Kennung für Ihre Web-App. Es ermöglicht Browsern, zwischen verschiedenen Anwendungen zu unterscheiden:

- Wenn ein Browser auf ein App-Manifest mit einem `id` stößt, das nicht einer bereits installierten Anwendung entspricht, behandelt er dieses Manifest als Beschreibung einer separaten Anwendung, selbst wenn es von derselben URL wie eine andere Anwendung bereitgestellt wird.
- Wenn ein Browser auf ein App-Manifest mit einem `id` stößt, das der Identität einer bereits installierten App entspricht, behandelt er das neue Manifest als Ersatz für das bestehende Manifest der App, selbst wenn die App von einer anderen URL als der zuvor installierten bereitgestellt wird.

> [!NOTE]
> Obwohl das `id` wie eine URL verarbeitet wird, verweist es nicht auf eine Ressource, auf die zugegriffen werden kann, daher muss es nicht innerhalb des [scope](/de/docs/Web/Manifest/scope) der App liegen.

Das `id` kann auch von Diensten verwendet werden, die Listen von Web-Apps sammeln, um Anwendungen eindeutig zu identifizieren.

Einige wichtige Punkte, die beim Verwenden des `id`-Mitglieds beachtet werden sollten:

- Verwenden Sie einen führenden `/`, um anzugeben, dass das `id` ein root-relativer URL-Pfad ist.
- Da `id` gegen den Ursprung von `start_url` aufgelöst wird, führen `id`-Werte wie `../foo`, `foo`, `/foo` und `./foo` alle zum selben Bezeichner relativ zum Ursprung. Wenn zum Beispiel `start_url` `https://example.com/app/` ist, werden alle diese `id`-Werte zu `https://example.com/foo/` aufgelöst.
- Standard-URL-Codierungs- und Dekodierungsregeln gelten beim Auflösen des `id`-Werts.
- Fragmente im `id` werden während der Verarbeitung entfernt. Wenn zum Beispiel `id` auf `foo#bar` gesetzt ist, wird es als `foo` aufgelöst. Ebenso, wenn `id` nicht definiert ist und der `start_url` `https://example.com/app/#home` ist, wird `id` zu `https://example.com/app/` aufgelöst.
- Abfrageparameter im `id` werden beibehalten und in den endgültigen aufgelösten Bezeichner aufgenommen.

## Beispiele

### Erstellen einer unterschiedlichen App-Version

Angenommen, Sie erstellen eine Web-App mit dem folgenden Manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

Wenn Sie später eine weitere Version dieser App mit wesentlichen Änderungen erstellen und möchten, dass sie als andere App behandelt wird, können Sie das Manifest wie folgt hinzufügen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In diesem Fall werden die neuen Manifestdateien, obwohl beide vom selben URL bereitgestellt werden, von Browsern als Beschreibung einer anderen Anwendung behandelt, da das `id` unterschiedlich ist. Folglich können Benutzer beide Versionen gleichzeitig installieren.

### Aktualisieren einer vorhandenen App

Betrachten Sie ein Szenario, in dem Sie eine Web-App mit dem folgenden Manifest bereitstellen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://old-domain.com/app"
}
```

Falls Sie später entscheiden, die App auf eine andere Domain zu verschieben, sollten Sie das Manifest wie folgt aktualisieren:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://new-domain.com/app"
}
```

Browser behandeln dieses neue Manifest als ein Update der vorhandenen App, da die `id`-Werte übereinstimmen. In diesem Fall erhalten Benutzer ein Update für ihre bestehende App, anstatt aufgefordert zu werden, eine neue App zu installieren.

### Verständnis der `id`-Auflösung

Angenommen, die `start_url` für Ihre App ist `https://example.com/my-app/home`. Die folgende Tabelle zeigt, wie verschiedene `id`-Werte im Manifest aufgelöst werden:

| `id` im Manifest              | Aufgelöstes `id`                   | Erklärung                                                                                  |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------ |
| undefined                     | `https://example.com/my-app/home`  | Standardmäßig `start_url`                                                                  |
| `""`                          | `https://example.com/my-app/home`  | Leerer String wird zu `start_url` aufgelöst                                                |
| `/`                           | `https://example.com/`             | Root-relative URL                                                                          |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relativer Pfad, aufgelöst gegen `start_url`'s Ursprung mit beibehaltenen Abfrageparametern |
| `foo#heading`                 | `https://example.com/foo`          | Relativer Pfad, aufgelöst gegen `start_url`'s Ursprung mit entferntem Fragment             |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Cross-Origin-URL nicht erlaubt, fällt zurück zu `start_url`                                |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Nicht-ASCII-Zeichen in der URL kodiert                                                     |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Manifest/scope) Manifestmitglied
- [`start_url`](/de/docs/Web/Manifest/start_url) Manifestmitglied
