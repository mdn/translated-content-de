---
title: id
slug: Web/Progressive_web_apps/Manifest/Reference/id
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `id`-Manifestmitglied wird verwendet, um einen eindeutigen Bezeichner für Ihre Webanwendung anzugeben.

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
    Die URL muss mit der [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Ihrer Webanwendung gleichen Ursprungs sein.
    Wenn `id` eine relative URL ist, wird sie anhand des Ursprungs von `start_url` aufgelöst. Jegliches Fragment im `id` wird stets ignoriert.
    Wenn `id` nicht angegeben ist oder der Wert in irgendeiner Weise ungültig ist (zum Beispiel kein String, keine gültige URL, nicht gleichen Ursprungs wie `start_url`), wird der Wert von `start_url` verwendet.

## Beschreibung

Das `id`-Manifestmitglied dient als eindeutiger Bezeichner für Ihre Web-App. Es ermöglicht Browsern, zwischen verschiedenen Anwendungen zu unterscheiden:

- Wenn ein Browser auf ein App-Manifest mit einem `id` stößt, das nicht mit einer bereits installierten Anwendung übereinstimmt, behandelt er dieses Manifest als Beschreibung einer eigenständigen Anwendung, selbst wenn es von derselben URL wie eine andere Anwendung bereitgestellt wird.
- Wenn ein Browser auf ein App-Manifest mit einem `id` stößt, das der Identität einer bereits installierten App entspricht, behandelt er das neue Manifest als Ersatz für das Manifest der bestehenden App, auch wenn die App von einer anderen URL als der zuvor installierten bereitgestellt wird.

> [!NOTE]
> Obwohl das `id` wie eine URL verarbeitet wird, verweist es nicht auf eine zugängliche Ressource, daher muss es nicht innerhalb des [Bereichs](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) der App liegen.

Das `id` kann auch von Diensten verwendet werden, die Listen von Web-Apps sammeln, um Anwendungen eindeutig zu identifizieren.

Einige wichtige Punkte, die bei der Verwendung des `id`-Mitglieds zu beachten sind:

- Verwenden Sie ein führendes `/`, um anzugeben, dass `id` ein wurzelrelativer URL-Pfad ist.
- Da `id` gegen den Ursprung von `start_url` aufgelöst wird, führen `id`-Werte wie `../foo`, `foo`, `/foo` und `./foo` alle zum gleichen Bezeichner relativ zum Ursprung. Zum Beispiel, wenn `start_url` `https://example.com/app/` ist, werden alle diese `id`-Werte zu `https://example.com/foo/` aufgelöst.
- Standard-URL-Codierungs- und Dekodierungsregeln gelten bei der Auflösung des `id`-Wertes.
- Fragmente im `id` werden während der Verarbeitung entfernt. Zum Beispiel, wenn `id` auf `foo#bar` gesetzt ist, wird es als `foo` aufgelöst. Ebenso wird, wenn `id` undefiniert ist und die `start_url` `https://example.com/app/#home` ist, `id` sich zu `https://example.com/app/` auflösen.
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

Wenn Sie später eine weitere Version dieser App mit wesentlichen Änderungen erstellen und diese als eine andere App behandelt werden soll, können Sie das Manifest wie folgt hinzufügen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In diesem Fall behandeln Browser, obwohl beide Manifestdateien von derselben URL bereitgestellt werden, das neue Manifest als Beschreibung einer anderen Anwendung, da das `id` unterschiedlich ist. Als Folge können Benutzer beide Versionen gleichzeitig installiert haben.

### Aktualisieren einer bestehenden App

Betrachten Sie ein Szenario, in dem Sie eine Web-App mit dem folgenden Manifest bereitstellen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://old-domain.com/app"
}
```

Wenn Sie sich jedoch später entscheiden, die App auf eine andere Domain zu verschieben, würden Sie das Manifest wie folgt aktualisieren:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://new-domain.com/app"
}
```

Browser behandeln dieses neue Manifest als ein Update für die bestehende App, da die `id`-Werte übereinstimmen. In diesem Fall erhalten die Benutzer ein Update für ihre bestehende App, anstatt aufgefordert zu werden, eine neue App zu installieren.

### Verständnis der `id`-Auflösung

Angenommen, die `start_url` für Ihre App ist `https://example.com/my-app/home`. Die folgende Tabelle zeigt, wie verschiedene `id`-Werte im Manifest aufgelöst werden:

| `id` im Manifest              | Aufgelöstes `id`                   | Erklärung                                                                                                 |
| ----------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| undefined                     | `https://example.com/my-app/home`  | Standardmäßig auf `start_url`                                                                             |
| `""`                          | `https://example.com/my-app/home`  | Leerer String wird zu `start_url`                                                                         |
| `/`                           | `https://example.com/`             | Wurzelrelative URL                                                                                        |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relativer Pfad wird gegenüber dem Ursprung von `start_url` aufgelöst, Abfrageparameter werden beibehalten |
| `foo#heading`                 | `https://example.com/foo`          | Relativer Pfad wird gegenüber dem Ursprung von `start_url` aufgelöst, Fragment wird entfernt              |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Cross-Origin-URL nicht erlaubt, fällt auf `start_url` zurück                                              |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Nicht-ASCII-Zeichen im URL kodiert                                                                        |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Mitglied
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifest-Mitglied
