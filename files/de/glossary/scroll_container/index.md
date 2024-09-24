---
title: Scroll-Container
slug: Glossary/Scroll_container
l10n:
  sourceCommit: dfad9eccce7c2f11c195003ec1cbd7b0fd9db577
---

{{GlossarySidebar}}

Ein **Scroll-Container** ist eine Elementbox, in der Inhalte gescrollt werden können, unabhängig davon, ob Scrollleisten vorhanden sind oder nicht. Ein User-Agent fügt einer Elementbox Scrollleisten hinzu, um sie zu einem Scroll-Container zu machen, wenn die CSS-Eigenschaft {{cssxref("overflow")}} auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist _und_ der Inhalt den Container überläuft.

Wenn der Inhalt einer Elementbox seinen Begrenzungsrahmen überschreitet, können Benutzer Scrollleisten verwenden, um durch den abgeschnittenen Inhalt zu scrollen, der ansonsten verborgen ist.

Ein Scroll-Container umfasst ein Scrollport und Scrollleisten.

## Scrollport

Das Scrollport ist der sichtbare Teil eines Scroll-Containers und stimmt mit der Innenabstand-Box des Scroll-Containers überein. Die Scrollleisten werden verwendet, um Inhalte in das und aus dem Scrollport zu bewegen, damit der Inhalt angezeigt werden kann.
