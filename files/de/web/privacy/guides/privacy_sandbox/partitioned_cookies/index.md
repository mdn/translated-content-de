---
title: Cookies mit unabhängigem partitionierten Zustand (CHIPS)
short-title: CHIPS
slug: Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: 0148e092e50db75e7dd065425de9e37648fa4198
---

**Cookies mit unabhängigem partitionierten Zustand** (**CHIPS**, auch bekannt als **Partitionierte Cookies**) ermöglicht Entwicklern, ein Cookie in partitionierten Speicher aufzunehmen, mit einem separaten Cookie-Container pro Top-Level-Website.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies Dienste in die Lage versetzen, Nutzer zu verfolgen und ihre Informationen über nicht verwandte Top-Level-Websites hinweg zu verknüpfen. Cookies, die als `Partitioned` markiert sind, werden doppelt gesperrt: nach dem Ursprung, der sie setzt, _und_ dem Ursprung der Top-Level-Seite.

Das bedeutet, dass sie nur im Kontext der Top-Level-Website gelesen werden können, auf der sie gesetzt wurden. Dies ermöglicht es, das Tracking über Websites hinweg zu blockieren, während es dennoch legitime Verwendungen von Drittanbieter-Cookies ermöglicht, wie z.B. die Speicherung des Zustands eingebetteter Karten oder Chat-Widgets über eine Domain und deren Subdomains hinweg sowie die Speicherung von Konfigurationsinformationen für Subressourcen-CDN-Lastverteilung und Headless-CMS-Anbieter.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, betrachten wir ein kurzes Beispiel. Historisch gesehen, wenn eine Website Inhalte über ein {{htmlelement("iframe")}} einbettet, konnte der eingebettete Inhalt ein Cookie auf dem Gerät des Nutzers als Reaktion auf die Cross-Site-Anfrage setzen. Wenn der Nutzer andere Websites besucht, die denselben Inhalt einbetten, kann der eingebettete Inhalt auf dasselbe Cookie zugreifen, das ursprünglich vom ersten eingebetteten Inhalt gesetzt wurde. Dies ermöglicht es dem Inhaltsanbieter, die Nutzeraktivität über diese Websites und alle anderen Websites hinweg zu verfolgen, die denselben Inhalt einbetten.

Zum Beispiel:

1. Ein Nutzer besucht `https://site-a.example`, das Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers.
2. Der Nutzer besucht `https://site-b.example`, das ebenfalls `https://3rd-party.example` einbettet. Dieses neue Exemplar von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzt wurde, als der Nutzer die vorherige Seite besucht hat.

Dies funktioniert, weil Cookies historisch gesehen mit einem Schlüssel basierend auf dem Host- oder Domainnamen der Website, die sie gesetzt haben, gespeichert wurden, auch bekannt als **Host-Schlüssel**. Im obigen Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — das es den Website-Betreibern ermöglicht, sich für die Nutzung von CHIPS zu entscheiden:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich können Sie das `__Host`-Präfix verwenden, wenn sie partitionierte Cookies setzen, um sie nur an die aktuelle Domain oder Subdomain zu binden, und dies wird empfohlen, wenn Sie keine Cookies zwischen Subdomains teilen müssen.

Mit `Partitioned` gesetzt, werden Drittanbieter-Cookies unter Verwendung zweier Schlüssel gespeichert, dem Host-Schlüssel und einem neuen **Partition-Schlüssel**. Der Partition-Schlüssel basiert auf dem Schema und {{Glossary("eTLD", "eTLD+1")}} der Top-Level-URL, die der Browser besuchte, als die Anfrage an den URL-Endpunkt gestellt wurde, der das Cookie gesetzt hat.

Zurück zu unserem Beispiel:

1. Ein Nutzer besucht `https://site-a.example`, das Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers unter Verwendung von `Partitioned`, was bedeutet, dass der Site-Betreiber sich für CHIPS entscheidet.
2. Der Speicher-Schlüssel für das Cookie wäre nun `{("https://site-a.example"), ("3rd-party.example")}}`.
3. Wenn der Nutzer `https://site-b.example` besucht, das ebenfalls `https://3rd-party.example` einbettet, kann dieses neue eingebettete Exemplar nicht mehr auf das Cookie zugreifen, da der Partition-Schlüssel nicht übereinstimmt.

> [!NOTE]
> CHIPS ist ähnlich dem [Zustandspartitionierungsmechanismus](/de/docs/Web/Privacy/Guides/State_Partitioning), der von Firefox implementiert wurde. Allerdings partitioniert die Zustandspartitionierung standardmäßig die Cookie-Speicherung in Drittanbieter-Kontexten, während CHIPS es erlaubt, sich für partitionierte Cookies sowohl in Erst- als auch in Drittanbieter-Kontexten zu entscheiden. Es wird empfohlen, den Opt-in-Mechanismus von CHIPS anstelle der Zustandspartitionierung zu verwenden, um die kompatibelsten partitionierten Cookies bereitzustellen.

## CHIPS und Subdomains

CHIPS erlaubt weiterhin, dass Drittanbieter-Inhalte, die über verschiedene Subdomains einer Website eingebettet sind, auf Drittanbieter-Cookies zugreifen können, die durch diesen Inhalt gesetzt wurden. Schauen wir uns ein Beispiel einer Einzelhandelsseite an, die einen Drittanbieter-Chatdienst verwendet:

1. Ein Nutzer besucht `https://shoppy.example`, das einen Drittanbieter-Chatdienst von `https://3rd-party.example/chat` einbettet, um Unterstützung für Nutzer bereitzustellen, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Nutzers, um den Zustand des Chats über verschiedene Subdomains der Website hinweg zu speichern.
2. Der Speicher-Schlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}}`.
3. Der Nutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, einschließlich `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, da der Partition-Schlüssel weiterhin übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cookies mit unabhängiger partitionierter Speicherung (CHIPS)](https://privacysandbox.google.com/cookies/chips) auf privacysandbox.google.com
- [CHIPS Erklärungsdokument](https://github.com/privacycg/CHIPS)
