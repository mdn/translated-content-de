---
title: Scroll container
slug: Glossary/Scroll_container
l10n:
  sourceCommit: dfad9eccce7c2f11c195003ec1cbd7b0fd9db577
---

{{GlossarySidebar}}

Ein **Scroll-Container** ist eine Elementbox, in der Inhalte gescrollt werden können, unabhängig davon, ob Scrollleisten vorhanden sind oder nicht. Ein User-Agent fügt einer Elementbox Scrollleisten hinzu, um sie zu einem Scroll-Container zu machen, wenn die CSS-{{cssxref("overflow")}}-Eigenschaft auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist _und_ der Inhalt den Container überläuft.

Wenn der Inhalt einer Elementbox aus ihrem Begrenzungsrahmen herausragt, können Benutzer Scrollleisten verwenden, um durch den abgeschnittenen Inhalt zu scrollen, der sonst nicht sichtbar ist.

Ein Scroll-Container umfasst einen Scrollport und Scrollleisten.

## Scrollport

Der Scrollport ist der sichtbare Teil eines Scroll-Containers und entspricht der Innenabstandbox des Scroll-Containers. Die Scrollleisten werden verwendet, um Inhalte in den Scrollport hinein- und herauszubewegen, sodass der Inhalt betrachtet werden kann.
