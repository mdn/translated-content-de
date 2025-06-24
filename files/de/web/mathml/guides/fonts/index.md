---
title: Schriftarten für MathML
short-title: Fonts
slug: Web/MathML/Guides/Fonts
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Schriftarten mit geeigneter Unicode-Abdeckung und Open Font Format-Funktionen sind erforderlich, um Mathematik korrekt darzustellen. Diese Seite beschreibt, wie Benutzer solche Matheschriftarten installieren können, um MathML in Browsern ordnungsgemäß anzuzeigen.

## Installationsanweisungen

Als Faustregel wird empfohlen, sowohl _Latin Modern Math_ (welches den [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil verwendet, der bei mathematischen Formeln beliebt ist) als auch _STIX Two Math_ (welches eine große Unicode-Abdeckung für wissenschaftliche Zeichen bietet) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriftarten auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die _Latin Modern Math_ und _STIX Two Math_ Schriftarten wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, wechseln Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie die Datei `latinmodern-math`.
3. Öffnen Sie die `latinmodern-math` Datei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das ZIP-Archiv `static_otf.zip` und wechseln Sie dann in das Verzeichnis `static_otf`. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular` Datei.
6. Öffnen Sie die `STIXTwoMath-Regular` Datei und klicken Sie auf die **Installieren** Schaltfläche. Wenn gewünscht, können Sie dies auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE] > _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie die _Latin Modern Math_ Schriftart wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Extrahieren Sie das ZIP-Archiv, navigieren Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie die Datei `latinmodern-math`.
3. Doppelklicken Sie auf die `latinmodern-math` Datei, und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schriftart installieren**.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die unten stehenden Schritte überspringen.

Installieren Sie die _STIX Two Math_ Schriftart wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das `static_otf.zip` ZIP-Archiv und wechseln Sie dann in das Verzeichnis `static_otf`. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular.otf` Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf` Datei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schriftart installieren**. Wenn gewünscht, können Sie dies auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser sie verwenden können, wird dringend empfohlen, die obigen Anweisungen zu befolgen, um eine optimale Mathe-Darstellung zu erzielen.

### Linux

Nachfolgend finden Sie Befehle, die Sie auf beliebten Linux-Distributionen ausführen können, um die Schriftarten _Latin Modern Math_ und _STIX Two Math_ über Ihren Paketmanager zu installieren. Alternative Ansätze werden ebenfalls bereitgestellt, falls Ihre Linux-Distribution keine speziellen Pakete für diese Schriftarten bereitstellt.

#### Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Falls Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_ und _STIX_ Schriftarten bietet, sollten Sie stattdessen die `texlive` Pakete installieren, die die Schriftarten _Latin Modern Math_ und _XITS_ enthalten. Zum Beispiel unter Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Allerdings müssen Sie wahrscheinlich sicherstellen, dass diese Schriftarten Ihrem System bekannt sind. Fügen Sie eine fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype` Verzeichnis von TeXLive zeigt, wie etwa:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Schließlich fügen Sie diese Konfigurationsdatei zur Systemschriftartenliste hinzu und regenerieren Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Wenn keine Pakete auf Ihren Linux-Distributionen verfügbar sind oder wenn Sie einfach Upstream-Pakete installieren möchten, dann probieren Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein `~/.fonts` Verzeichnis, falls es noch nicht existiert, und legen Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` darin ab.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [mathematische Layouts](https://github.com/notofonts/math/blob/main/documentation/building-math-fonts/index.md).

### Andere Systeme

Unter anderen Systemen sollten Sie eine [Schriftart mit einer MATH-Tabelle](#schriftarten_mit_einer_math-tabelle) über Ihren Paket-Manager installieren. Beachten Sie, dass diese Schriftarten in der Regel mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) ausgeliefert werden, Sie jedoch spezifischen Anweisungen folgen müssen, damit Ihr System die Schriftarten erkennt. Als letzte Möglichkeit installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den nächsten Abschnitten finden Sie weitere nützliche Tipps zur Installation und
Konfiguration von Schriftarten für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben sehr wenige Schriftarten geeignete Glyphen für arabische mathematische alphabetische Symbole. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir die Installation der _XITS_ oder [Amiri](https://aliftype.com/amiri/) Schriftarten.

### Installation ohne Administratorrechte

Wenn Sie Schriftarten auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option, das Matheskript das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) zu verwenden. Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da Ihr Gecko-Browser gezwungen ist, auf jeder besuchten Seite ein CSS-Stylesheet sowie Web-Matheschriftarten auf allen Seiten mit MathML-Inhalt zu laden.

Eine bessere Alternative auf UNIX-Systemen ist es, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einen lokalen Schriftartenordner zu installieren und (falls erforderlich) `fc-cache` darauf auszuführen. Unter macOS und Linux sind die Standardpfade jeweils `~/Library/Fonts/` und `~/.fonts`.

### Schriftarten mit einer MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schriftart](https://fred-wang.github.io/MathFonts/) installieren und zur MathML-Darstellung verwenden. Einige Browser bieten eine Möglichkeit, die Standardschriftart für MathML im Schriftartenpräferenzmenü zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
